import { NodeDataReducerIfc } from "../providers/node.data.provider";

const nodeDataIniSt: NodeDataReducerIfc = {
  nodeData: {
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
    requested_to_leave: true,
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
};

const update_node_data = "UPDATE_NODE_DATA";

const nodeDataReducer = (state = nodeDataIniSt, action: any) => {
  switch (action.type) {
    case update_node_data:
      return {
        ...state,
        nodeData: action.payload,
      };
    default:
      return { ...state };
  }
};

export { nodeDataIniSt, nodeDataReducer, update_node_data };
