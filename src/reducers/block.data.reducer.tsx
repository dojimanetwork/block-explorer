import { BlockDataReducerIfc } from "../providers/block.data.provider";
import { trimOldestWithLatitem } from "../utils/helpers";

const blockChainDataIniSt: BlockDataReducerIfc = {
  prevBlockHeight: "-1",
  blockChainData: [],
  underMaintainance: "success",
};

const update_block_chain_data = "UPDATE_BLOCK_CHAIN_DATA";
const update_under_maintainance = "UPDATE_UNDER_MAINTAINANCE";

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
    case update_under_maintainance:
      return {
        ...state,
        underMaintainance: action.payload,
      };
    default:
      return { ...state };
  }
};

export { blockChainDataIniSt, blockChainDataReducer, update_block_chain_data, update_under_maintainance };
