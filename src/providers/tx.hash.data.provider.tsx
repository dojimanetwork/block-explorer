import React, { createContext, useReducer } from "react";
import { TxByHashDataType } from "../api/tx.by.hash.api";
import {
  txHashDataIniSt,
  txHashDataReducer,
} from "../reducers/tx.hash.data.reducer";

import { ChildrenType } from "../types";

export interface TxHashDataIfc {
  TxHashDataDispatch: React.Dispatch<any>;
  txhashDataState: TxHashDataReducerIfc;
}

export interface TxHashDataReducerIfc {
  txhashData: TxByHashDataType;
}

export const TxHashDataContext = createContext<TxHashDataIfc>({
  TxHashDataDispatch: () => {},
  txhashDataState: {
    txhashData: {
      tx: {
        auth_info: {},
        body: {
          extension_options: [],
          memo: "",
          messages: [
            {
              "@type": "",
              amount: [
                {
                  amount: "",
                  denom: "",
                },
              ],
              from_address: "",
              to_address: "",
            },
          ],
          non_critical_extension_options: [],
          timeout_height: "",
        },
        signatures: [],
      },
      tx_response: {
        code: 0,
        codespace: "",
        data: "",
        events: [],
        gas_used: "",
        gas_wanted: "",
        height: "",
        info: "",
        logs: [],
        raw_log: "",
        timestamp: "",
        tx: {},
        txhash: "",
      },
    },
  },
});

export default function TxHashDataProvider(props: ChildrenType) {
  const [txhashDataState, TxHashDataDispatch] = useReducer(
    txHashDataReducer,
    txHashDataIniSt
  );
  return (
    <TxHashDataContext.Provider value={{ txhashDataState, TxHashDataDispatch }}>
      {props.children}
    </TxHashDataContext.Provider>
  );
}
