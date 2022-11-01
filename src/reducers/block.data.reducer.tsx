import { BlockDataReducerIfc, BlocksDataIfc } from "../providers/block.data.provider";

const blockChainDataIniSt: BlockDataReducerIfc = {
  blockChainData: [],
};

const update_block_chain_data = "UPDATE_block_CHAIN_DATA";
// const update_reset_block_chain_data = "UPDATE_RESET_block_CHAIN_DATA";

const blockChainDataReducer = (state: BlockDataReducerIfc, action: any) => {
  switch (action.type) {
    case update_block_chain_data:
      let modArray: Array<BlocksDataIfc>;
      if (state.blockChainData.length >= 10) {
        modArray = state.blockChainData.splice(1, state.blockChainData.length-1);
        modArray.push(action.payload);
        console.log("++++", modArray, state.blockChainData.length);
      } else {
        modArray = state.blockChainData;
        modArray.push(action.payload);
      }
      return { ...state, blockChainData: [...modArray] };
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
  //   update_reset_block_chain_data,
};
