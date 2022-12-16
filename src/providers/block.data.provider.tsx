import React, { createContext, useReducer } from "react";
import { BlocksTableData } from "../api/blocks.api";
import {
  blockChainDataIniSt,
  blockChainDataReducer,
} from "../reducers/block.data.reducer";
import { ChildrenType, MaintainanceError } from "../types";

export interface BlockChainDataIfc {
  BlockChainDataDispatch: React.Dispatch<any>;
  blockChainDataState: BlockDataReducerIfc;
}

export interface BlocksDataIfc {
  blockHeight: string;
  latestBlockHash: string;
  latestHashTxs: number;
  latestTime: string;
  validatorAddress: string;
}

export interface BlockDataReducerIfc {
  blockChainData: BlocksDataIfc[];
  transactionsData: BlocksDataIfc[];
  blocksDataCards: BlocksDataIfc[];
  prevBlockHeight: string;
  blocksTableData: Array<BlocksTableData>;
  underMaintainance: MaintainanceError;
}

export const BlockChainDataContext = createContext<BlockChainDataIfc>({
  BlockChainDataDispatch: () => {},
  blockChainDataState: {
    blockChainData: [],
    blocksDataCards: [],
    transactionsData: [],
    prevBlockHeight: "-1",
    blocksTableData: [
      {
        id: "",
        height: "",
        proposer_address: "",
        transactions_count: "",
        "time validate:": "",
      },
    ],
    underMaintainance: "success",
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
