import React, { createContext, useReducer } from "react";
import { PoolsDataType } from "../api/pools.api";
import {
  poolsDataIniSt,
  poolsDataReducer,
} from "../reducers/pools.data.reducer";
import { ChildrenType } from "../types";

export interface PoolsDataIfc {
  PoolsDataDispatch: React.Dispatch<any>;
  poolsDataState: PoolsDataReducerIfc;
}

export interface PoolsDataReducerIfc {
  poolsData: Array<PoolsDataType>;
}

export const PoolsDataContext = createContext<PoolsDataIfc>({
  PoolsDataDispatch: () => {},
  poolsDataState: {
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
  },
});

export default function PoolsDataProvider(props: ChildrenType) {
  const [poolsDataState, PoolsDataDispatch] = useReducer(
    poolsDataReducer,
    poolsDataIniSt
  );
  return (
    <PoolsDataContext.Provider value={{ poolsDataState, PoolsDataDispatch }}>
      {props.children}
    </PoolsDataContext.Provider>
  );
}
