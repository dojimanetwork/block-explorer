import React, { createContext, useReducer } from "react";
import {
  blockChainDataIniSt,
  blockChainDataReducer,
} from "../reducers/block.data.reducer";
import { ChildrenType } from "../types";

export interface BlockChainDataIfc {
  BlockChainDataDispatch: React.Dispatch<any>;
  blockChainDataState: BlockDataReducerIfc;
}

export interface BlocksDataIfc {
  blockHeight: string;
  latestBlockHash: string;
  latestHashTxs: number;
  latestTime: string
}

export interface BlockDataReducerIfc {
  blockChainData: BlocksDataIfc[]
}

export const BlockChainDataContext = createContext<BlockChainDataIfc>({
  BlockChainDataDispatch: () => {},
  blockChainDataState: {
    blockChainData:[]
  },
});

export default function BlockChainDataProvider(props: ChildrenType) {
  const [blockChainDataState, BlockChainDataDispatch] = useReducer(
    blockChainDataReducer,
    blockChainDataIniSt
  );
  return (
    <BlockChainDataContext.Provider
      value={{ blockChainDataState, BlockChainDataDispatch }}
    >
      {props.children}
    </BlockChainDataContext.Provider>
  );
}
