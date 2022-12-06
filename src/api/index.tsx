import axios from "axios";
import moment from "moment";
import { memo, useEffect } from "react";
import { HermesApiNodesUrl, HermesRpcBlockByHeightUrl, HermesRpcStatusUrl } from "../data-urls";
import useBlockChainData from "../hooks/useBlockChainData";
import useNodeData from "../hooks/useNodeDetails";
import { update_block_chain_data } from "../reducers/block.data.reducer";
import { update_node_data } from "../reducers/node.data.reducer";
import { BlockByHeightType } from "./block.height.api";
import { BlockStatusType } from "./blocks.api";
import { NodeDetailsType } from "./node.details.api";

export function convertISOtoUTC(date: string) {
  const utcDate = new Date(date).toUTCString();
  return utcDate;
}

function HandleDashFunCalls() {
  const { BlockChainDataDispatch, blockChainDataState } = useBlockChainData();
  const { prevBlockHeight } = blockChainDataState;
  const { NodeDataDispatch } = useNodeData();

  useEffect(() => {
    fetchNodeDetails();
    // fetchBlocksData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const interval = setInterval(
      async function (prevBlockHeight) {
        await fetchBlockDataByNumber(prevBlockHeight);
      },
      5000,
      prevBlockHeight
    );

    return () => {
      // console.log("cleared");

      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [prevBlockHeight]);

  const fetchBlockDataByNumber = async (prevBlockHeight: string) => {
    let response = await axios.get(HermesRpcStatusUrl);
    if (response.status === 200) {
      let result: BlockStatusType = response.data;
      // console.log(prevBlockHeight,result.result.sync_info.latest_block_height);
      if (
        result !== (null || undefined) &&
        prevBlockHeight !== result.result.sync_info.latest_block_height
      ) {
        let blockHeight = result.result.sync_info.latest_block_height;
        let blockByheight = await axios.get(
          `${HermesRpcBlockByHeightUrl}=${Number(blockHeight)}`
        );
        if (blockByheight.status === 200) {
          let blockByHeightResult: BlockByHeightType = blockByheight.data;
          if (blockByHeightResult !== (null || undefined)) {
            let latestHeight = result.result.sync_info.latest_block_height;
            let latestHash = result.result.sync_info.latest_block_hash;
            let latestTime = convertISOtoUTC(
              result.result.sync_info.latest_block_time
            );
            // console.log("Time ", moment(latestTime).format("HH:mm:ss"));
            let blockLatestTime = moment(latestTime).format("HH:mm:ss");
            // console.log("Seconds", moment.utc(moment(time, "HH:mm:ss").diff(moment(blockTime, "HH:mm:ss"))).format("ss"));
            let txs = blockByHeightResult.result.block.data.txs.length;
            let validatorAddress =
              blockByHeightResult.result.block.last_commit.signatures[0]
                .validator_address;
            // console.log("entered 1 ");
            BlockChainDataDispatch({
              type: update_block_chain_data,
              payload: {
                blockChainData: {
                  blockHeight: latestHeight,
                  latestBlockHash: latestHash,
                  latestHashTxs: txs,
                  latestTime: blockLatestTime,
                  validatorAddress: validatorAddress,
                },
                prevBlockHeight: blockHeight,
              },
            });
          }
        }
        // }
      }
    }
  };

  const fetchNodeDetails = async () => {
    let response = await axios.get(HermesApiNodesUrl);
    if (response.status === 200) {
      let result: NodeDetailsType = response.data;
      if (result.length !== 0) {
        NodeDataDispatch({
          type: update_node_data,
          payload: result[0],
        });
      }
    }
  };

  return null;
}

// const fetchBlocksData = async () => {
//   let response = await axios.get("http://localhost:8080/api/block/mongo", {
//     headers: { 
//     'Access-Control-Allow-Origin' : 'http://localhost:3000',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   }});
//   if (response.status === 200) {
//     let result: BlocksDataTpye = response.data;
//     console.log("blocks data", result);
//   }
//   return null;
// };

export default memo(HandleDashFunCalls);
