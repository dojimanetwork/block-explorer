import { PoolsDataReducerIfc } from "../providers/pools.data.provider";

const poolsDataIniSt: PoolsDataReducerIfc = {
  poolsData: [
    {
      balance_doj: "",
      balance_asset: "",
      asset: "",
      LP_units: "",
      pool_units: "",
      status: "",
      decimals: 0,
      synth_units: "",
      synth_supply: "",
      pending_inbound_doj: "",
      pending_inbound_asset: "",
    },
  ],
};

const update_pools_data = "UPDATE_POOLS_DATA";

const poolsDataReducer = (state = poolsDataIniSt, action: any) => {
  switch (action.type) {
    case update_pools_data:
      return {
        ...state,
        poolsData: action.payload,
      };
    default:
      return { ...state };
  }
};

export { poolsDataIniSt, poolsDataReducer, update_pools_data };
