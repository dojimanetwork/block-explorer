import axios from "axios";
import moment from "moment";
import { memo, useEffect } from "react";
import {
  HermesApiNodesUrl,
  HermesApiPoolsUrl,
  HermesRpcBlockByHeightUrl,
  HermesRpcStatusUrl,
} from "../data-urls";
import useBlockChainData from "../hooks/useBlockChainData";
import useNodeData from "../hooks/useNodeDetails";
import usePoolsData from "../hooks/usePoolsData";
import {
  update_blocks_data_cards,
  update_block_chain_data,
  // update_transactions_data,
  // update_block_table_data,
  update_under_maintainance,
} from "../reducers/block.data.reducer";
import { update_node_data } from "../reducers/node.data.reducer";
import { update_pools_data } from "../reducers/pools.data.reducer";
import { BlockByHeightType } from "./block.height.api";
import { BlockStatusType } from "./blocks.api";
import { NodeDetailsType } from "./node.details.api";
import { PoolsData } from "./pools.api";

export function convertISOtoUTC(date: string) {
  const utcDate = new Date(date).toUTCString();
  return utcDate;
}

function HandleDashFunCalls() {
  const { BlockChainDataDispatch, blockChainDataState } = useBlockChainData();
  const { prevBlockHeight } = blockChainDataState;
  const { NodeDataDispatch } = useNodeData();
  const { PoolsDataDispatch } = usePoolsData();

  useEffect(() => {
    fetchNodeDetails();
    fetchPoolsData();
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
    try {
      let response = await axios.get(HermesRpcStatusUrl);
      if (response.status === 200) {
        let result: BlockStatusType = response.data;
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

              // dispatching blocks data     
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

              // dispatching blocks data for cards in dashboard
              BlockChainDataDispatch({
                type: update_blocks_data_cards,
                payload: {
                  blocksDataCards: {
                    blockHeight: latestHeight,
                    latestBlockHash: latestHash,
                    latestHashTxs: txs,
                    latestTime: blockLatestTime,
                    validatorAddress: validatorAddress,
                  },
                  prevBlockHeight: blockHeight,
                },
              });

              // dispatching transactions data if any transactions occurs
              // if (txs !== 0) {
              //   BlockChainDataDispatch({
              //     type: update_transactions_data,
              //     payload: {
              //       transactionsData: {
              //         blockHeight: latestHeight,
              //         latestBlockHash: latestHash,
              //         latestHashTxs: txs,
              //         latestTime: blockLatestTime,
              //         validatorAddress: validatorAddress,
              //       },
              //     },
              //   });
              // }
            }
          }
        }
      }
    } catch (error) {
      BlockChainDataDispatch({
        type: update_under_maintainance,
        payload: "error",
      });
    }
  };

  const fetchPoolsData = async () => {
    let response = await axios.get(HermesApiPoolsUrl);
    if (response.status === 200) {
      let result: PoolsData = response.data;
      if (result.length !== 0) {
        PoolsDataDispatch({
          type: update_pools_data,
          payload: result,
        });
      }
    }
  };

  // const fetchBlocksData = async () => {
  //   console.log("before");
  //   let response = await axios.get("http://localhost:8080/api/block/mongo");
  //   console.log("after", response);
  //   if (response.status === 200) {
  //     let result:BlocksDataType = response.data;
  //     console.log("before", result);
  //     if (result.length !== 0) {
  //       BlockChainDataDispatch({
  //         type: update_block_table_data,
  //         payload: result
  //       })
  //     }
  //   }
  // };

  const fetchNodeDetails = async () => {
    let response = await axios.get(HermesApiNodesUrl);
    if (response.status === 200) {
      let result: NodeDetailsType = response.data;
      if (result.length !== 0) {
        // console.log("headers", Object.keys(result[0]));
        NodeDataDispatch({
          type: update_node_data,
          payload: [...result],
        });
      }
    }
  };

  return null;
}

export default memo(HandleDashFunCalls);
