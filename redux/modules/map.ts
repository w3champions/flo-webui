import {
  createSlice,
  SerializedError,
  PayloadAction,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { MapList, MapEntry } from "../../types/map";
import { AppState } from "../store";
import { GetMapDetailMessage, WsMessageTypeId } from "../../types/ws";
import { WAR3_STORAGE_MAP_PATH_PREFIX } from "../../const";
import { Ws } from "../../providers/ws";

export interface MapState {
  list: MapList;
  listLoading: boolean;
  listLoadError: SerializedError;
  filter: string;
  selectedId: string;
  detail: GetMapDetailMessage;
  detailLoading: boolean;
  detailLoadError: SerializedError;
}

const mapSlice = createSlice({
  name: "map",
  initialState: {
    list: null,
    listLoading: false,
    listLoadError: null,
    filter: "",
    selectedId: null,
    detail: null,
    detailLoading: false,
    detailLoadError: null,
  } as MapState,
  reducers: {
    startLoadMapList(state) {
      state.list = null;
      state.listLoading = true;
      state.listLoadError = null;
    },
    setMapListLoaded(state, action: PayloadAction<MapList>) {
      state.listLoading = false;
      state.listLoadError = null;
      state.list = action.payload;
    },
    setMapListLoadError(state, action: PayloadAction<SerializedError>) {
      state.listLoading = false;
      state.listLoadError = action.payload;
    },
    updateMapFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setMapSelectedId(state, action: PayloadAction<string>) {
      state.selectedId = action.payload;
    },
    startLoadDetail(state) {
      state.detail = null;
      state.detailLoading = true;
      state.detailLoadError = null;
    },
    setMapLoadDetailLoadError(state, action: PayloadAction<SerializedError>) {
      state.detailLoading = false;
      state.detailLoadError = action.payload;
    },
    setMapDetailLoaded(state, action: PayloadAction<GetMapDetailMessage>) {
      state.detailLoading = false;
      state.detail = action.payload;
      state.detailLoadError = null;
    },
  },
  extraReducers: (builder) => {},
});

export const selectMapState = (state: AppState) => state.map;
export const selectMapFilter = createSelector(
  selectMapState,
  (state) => state.filter
);

const selectMapFiltered = createSelector(
  selectMapState,
  selectMapFilter,
  (state, filter) => {
    if (!state.list) {
      return null;
    }

    const root = state.list.root;

    if (!filter) {
      return root;
    }

    const filterFn = (c: MapEntry) => {
      return c.children.length || (c.name && c.name.includes(filter));
    };
    const filterChildren = (children: MapEntry[]) => {
      const filtered = children
        .map((c) => {
          return {
            ...c,
            children: filterChildren(c.children),
          };
        })
        .filter(filterFn);
      return filtered;
    };
    return {
      ...root,
      children: filterChildren(root.children),
    } as MapEntry;
  }
);

export const selectMapListSorted = createSelector(
  selectMapFiltered,
  (rootEntry) => {
    function sortChildren(entry: MapEntry): MapEntry {
      const parseName = (name) => {
        const matches = name.match(/^\((\d+)\)(.+)$/);
        return matches ? [parseInt(matches[1]), matches[2]] : [0, name];
      };
      const sorter = (a: MapEntry, b: MapEntry) => {
        const [num1, name1] = parseName(a.name);
        const [num2, name2] = parseName(b.name);
        if (num1 != num2) {
          return num1 - num2;
        }

        if (name1 === name2) {
          return 0;
        }

        return name1 > name2 ? 1 : -1;
      };
      return {
        ...entry,
        children: entry.children.slice().sort(sorter).map(sortChildren),
      } as MapEntry;
    }
    return rootEntry ? sortChildren(rootEntry) : null;
  }
);

export const selectMapListLoading = createSelector(
  selectMapState,
  (s) => s.listLoading
);

export const selectMapListLoadError = createSelector(
  selectMapState,
  (s) => s.listLoadError
);

export const selectMapSelectedId = createSelector(
  selectMapState,
  (s) => s.selectedId
);

export const selectMapDetail = createSelector(selectMapState, (s) => s.detail);

export const selectMapDetailLoading = createSelector(
  selectMapState,
  (s) => s.detailLoading
);

export const selectMapDetailLoadError = createSelector(
  selectMapState,
  (s) => s.detailLoadError
);

export const loadMapList = createAsyncThunk(
  "map/loadMapList",
  async (ws: Ws, { dispatch }) => {
    ws.send({
      type: WsMessageTypeId.ListMaps,
    });
    dispatch(mapSlice.actions.startLoadMapList());
  }
);

export const loadMapDetail = createAsyncThunk(
  "map/loadMapDetail",
  async ({ ws, id }: { ws: Ws; id: string }, { dispatch }) => {
    const prefix = /^[\/\\](?:war3\.w3mod\:)?/
    ws.send({
      type: WsMessageTypeId.GetMapDetail,
      path: id.replace(prefix, '')
    });
    dispatch(mapSlice.actions.startLoadDetail());
  }
);

export const loadMapDetailByPath = createAsyncThunk(
  "map/loadMapDetailByPath",
  async ({ ws, path }: { ws: Ws; path: string }, { dispatch }) => {
    ws.send({
      type: WsMessageTypeId.GetMapDetail,
      path,
    });
    dispatch(mapSlice.actions.startLoadDetail());
  }
);

export const {
  setMapListLoaded,
  setMapListLoadError,
  updateMapFilter,
  setMapSelectedId,
  startLoadDetail,
  setMapDetailLoaded,
  setMapLoadDetailLoadError,
} = mapSlice.actions;

export default mapSlice.reducer;
