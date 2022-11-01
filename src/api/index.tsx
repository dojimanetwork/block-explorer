import axios from "axios";
import moment from "moment";
import { useEffect } from "react";
import useBlockChainData from "../hooks/useBlockChainData";
import { update_block_chain_data } from "../reducers/block.data.reducer";
import { BlockByHeightType } from "./block.height.api";
import { BlockStatusType } from "./blocks.api";

function convertISOtoUTC(date: string) {
  const utcDate = new Date(date).toUTCString();
  return utcDate;
}

function HandleDashFunCalls() {
  const { BlockChainDataDispatch } = useBlockChainData();

  useEffect(() => {
    setInterval(async () => {
      await fetchBlockDataByNumber();
    }, 5000);
    // eslint-disable-next-line
  }, []);

  const fetchBlockDataByNumber = async () => {
    // const blockHeight = await fetchBlocksData();
    let response = await axios.get("http://localhost:26657/status?");
    if (response.status === 200) {
      let result: BlockStatusType = response.data;
      // blockHeight = result.result.sync_info.latest_block_height;
      if (result !== (null || undefined)) {
        let blockHeight = result.result.sync_info.latest_block_height;
        // console.log("++++++", result.result.sync_info.latest_block_height);
        let blockByheight = await axios.get(
          `http://localhost:26657/block?height=${Number(blockHeight)}`
        );
        if (blockByheight.status === 200) {
          let blockByHeightResult: BlockByHeightType = blockByheight.data;
          if (blockByHeightResult !== (null || undefined)) {
            let latestHeight = result.result.sync_info.latest_block_height;
            let latestHash = result.result.sync_info.latest_block_hash;
            let latestTime = convertISOtoUTC(
              result.result.sync_info.latest_block_time
            );
            console.log("Time ", moment(latestTime).format("HH:mm:ss"));
            let blockLatestTime = moment(latestTime).format("HH:mm:ss");
            // console.log("Seconds", moment.utc(moment(time, "HH:mm:ss").diff(moment(blockTime, "HH:mm:ss"))).format("ss"));
            let txs = blockByHeightResult.result.block.data.txs.length;
            BlockChainDataDispatch({
              type: update_block_chain_data,
              payload: {
                blockHeight: latestHeight,
                latestBlockHash: latestHash,
                latestHashTxs: txs,
                latestTime: blockLatestTime,
              },
            });
          }
        }
      }
    }
  };

  return null;
}

export default HandleDashFunCalls;
