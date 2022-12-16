import React, { createContext, useReducer } from "react";
import { NodeDetailsArrayType } from "../api/node.details.api";
import { nodeDataIniSt, nodeDataReducer } from "../reducers/node.data.reducer";

import { ChildrenType } from "../types";

export interface NodeDataIfc {
  NodeDataDispatch: React.Dispatch<any>;
  nodeDataState: NodeDataReducerIfc;
}

export interface NodeDataReducerIfc {
  nodeData: Array<NodeDetailsArrayType>;
}

export const NodeDataContext = createContext<NodeDataIfc>({
  NodeDataDispatch: () => {},
  nodeDataState: {
    nodeData: [
      {
        node_address: "",
        status: "",
        pub_key_set: {
          secp256k1: "",
          ed25519: "",
        },
        validator_cons_pub_key: "",
        bond: "",
        active_block_height: 0,
        bond_address: "",
        status_since: 0,
        signer_membership: [],
        requested_to_leave: false,
        forced_to_leave: false,
        leave_height: 0,
        ip_address: "",
        version: "",
        slash_points: 0,
        jail: {
          node_address: "",
          release_height: 0,
          reason: "",
        },
        current_award: "",
        observe_chains: [
          {
            chain: "",
            height: 0,
          },
          {
            chain: "",
            height: 0,
          },
        ],
        preflight_status: {
          status: "",
          reason: "",
          code: 0,
        },
        bond_providers: {
          node_address: "",
          node_operator_fee: "",
          providers: [],
        },
      },
    ],
  },
});

export default function NodeDataProvider(props: ChildrenType) {
  const [nodeDataState, NodeDataDispatch] = useReducer(
    nodeDataReducer,
    nodeDataIniSt
  );
  return (
    <NodeDataContext.Provider value={{ nodeDataState, NodeDataDispatch }}>
      {props.children}
    </NodeDataContext.Provider>
  );
}
