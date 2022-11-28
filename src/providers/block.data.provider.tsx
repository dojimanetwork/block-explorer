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
  latestTime: string;
  validatorAddress: string
}

export interface BlockDataReducerIfc {
  blockChainData: BlocksDataIfc[];
  prevBlockHeight: string;
}

export const BlockChainDataContext = createContext<BlockChainDataIfc>({
  BlockChainDataDispatch: () => {},
  blockChainDataState: {
    blockChainData: [],
    prevBlockHeight: "-1",
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
