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
import { PingUpdateMessage } from "../../types/ws";

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
    updateNodesPing(
      state,
      {
        payload: { ping_map },
      }: PayloadAction<PingUpdateMessage>
    ) {
      for (let [node_id, stats] of Object.entries(ping_map)) {
        const node = state.nodes.find((n) => n.id === Number(node_id));
        if (node) {
          node.ping = stats;
        }
      }
    },
  },
});

export const { updateNodes, updateNodesPing } = nodeSlice.actions;

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
