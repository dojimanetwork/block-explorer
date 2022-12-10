export type NodeDetailsType = Array<NodeDetailsArrayType>;

export type NodeDetailsArrayType = {
  node_address: string;
  status: string;
  pub_key_set: {
    secp256k1: string;
    ed25519: string;
  };
  validator_cons_pub_key: string;
  bond: string;
  active_block_height: number;
  bond_address: string;
  status_since: number;
  signer_membership: [];
  requested_to_leave: boolean;
  forced_to_leave: boolean;
  leave_height: number;
  ip_address: string;
  version: string;
  slash_points: number;
  jail: {
    node_address: string;
    release_height: number;
    reason: string
  };
  current_award: string;
  observe_chains: [
    {
      chain: string;
      height: number
    },
    {
      chain: string;
      height: number
    }
  ];
  preflight_status: {
    status: string;
    reason: string;
    code: number;
  };
  bond_providers: {
    node_address: string;
    node_operator_fee: string;
    providers: [];
  };
};
