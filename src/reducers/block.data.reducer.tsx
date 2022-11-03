import {
  BlockDataReducerIfc,
} from "../providers/block.data.provider";
import { trimOldestWithLatitem } from "../utils/helpers";

const blockChainDataIniSt: BlockDataReducerIfc = {
  prevBlockHeight: "-1",
  blockChainData: [],
};

const update_block_chain_data = "UPDATE_BLOCK_CHAIN_DATA";
const update_prev_block_height = "UPDATE_PREV_BLOCK_HEIGHT";
// const update_reset_block_chain_data = "UPDATE_RESET_block_CHAIN_DATA";

const blockChainDataReducer = (state = blockChainDataIniSt , action: any) => {
  // console.log("entered");
  switch (action.type) {
    case update_block_chain_data:
      const modArray = trimOldestWithLatitem(state.blockChainData, 10, action.payload.blockChainData)
      return { ...state, blockChainData: [...modArray], prevBlockHeight: action.payload.prevBlockHeight };
    // case update_reset_block_chain_data:
    //   return {
    //     ...state,
    //     blockChainAddress: "",
    //     blockChainTokenBalance: 0,
    //     blockChainUsdBalance: 0,
    //     chainData: {
    //       chainAddress: "",
    //       chainFee: 0,
    //     },
    //   };
    default:
      return { ...state };
  }
};

export {
  blockChainDataIniSt,
  blockChainDataReducer,
  update_block_chain_data,
  update_prev_block_height,
  //   update_reset_block_chain_data,
};
