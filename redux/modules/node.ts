import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { FloNode } from "../../types/node";
import { AppState } from "../store";
import { sortBy } from "lodash";

export interface NodeState {
  nodes: FloNode[];
}

const nodeSlice = createSlice({
  name: "node",
  initialState: {
    nodes: [],
  } as NodeState,
  reducers: {
    updateNodes(state, { payload }: PayloadAction<FloNode[]>) {
      state.nodes = sortBy(payload, (node) => node.name);
    },
    updateNodePing(
      state,
      {
        payload: { node_id, ping },
      }: PayloadAction<{ node_id: number; ping: number | null }>
    ) {
      const node = state.nodes.find((n) => n.id === node_id);
      if (node) {
        node.ping = ping;
      }
    },
  },
});

export const { updateNodes, updateNodePing } = nodeSlice.actions;

const selectNodeState = (state: AppState) => state.node;
export const selectNodes = createSelector(
  selectNodeState,
  (state) => state.nodes
);

export const selectNodeMap = createSelector(
  selectNodes,
  (nodes) => new Map(nodes.map((n) => [n.id, n]))
);

export default nodeSlice.reducer;
