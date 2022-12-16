import { BlockDataReducerIfc } from "../providers/block.data.provider";
import { trimOldestWithLatitem } from "../utils/helpers";

const blockChainDataIniSt: BlockDataReducerIfc = {
  prevBlockHeight: "-1",
  // transactionsData: [],
  blocksDataCards: [],
  // blocksTableData: [
  //   {
  //     id: "",
  //     height: "",
  //     proposer_address: "",
  //     transactions_count: "",
  //     "time validate:": "",
  //   },
  // ],
  blockChainData: [],
  underMaintainance: "success",
};

const update_block_chain_data = "UPDATE_BLOCK_CHAIN_DATA";
const update_under_maintainance = "UPDATE_UNDER_MAINTAINANCE";
// const update_block_table_data = "UPDATE_BLOCKS_TABLE_DATA";
// const update_transactions_data = "UPDATE_TRANSACTIONS_DATA";
const update_blocks_data_cards = "UPDATE_BLOCKS_DATA_CARDS";

const blockChainDataReducer = (state = blockChainDataIniSt, action: any) => {
  switch (action.type) {
    case update_block_chain_data:
      const modArray = trimOldestWithLatitem(
        state.blockChainData,
        10,
        action.payload.blockChainData
      );
      return {
        ...state,
        blockChainData: [...modArray],
        prevBlockHeight: action.payload.prevBlockHeight,
      };
    case update_blocks_data_cards:
      const modArray5 = trimOldestWithLatitem(
        state.blocksDataCards,
        5,
        action.payload.blocksDataCards
      );
      return {
        ...state,
        blocksDataCards: [...modArray5],
        prevBlockHeight: action.payload.prevBlockHeight,
      };
    // case update_block_table_data:
    //   return {
    //     ...state,
    //     blocksTableData: action.payload,
    //   };
    // case update_transactions_data:
    //   return {
    //     ...state,
    //     transactionsData: action.payload,
    //   };
    case update_under_maintainance:
      return {
        ...state,
        underMaintainance: action.payload,
      };
    default:
      return { ...state };
  }
};

export {
  blockChainDataIniSt,
  blockChainDataReducer,
  update_block_chain_data,
  update_under_maintainance,
  // update_block_table_data,
  // update_transactions_data,
  update_blocks_data_cards
};
