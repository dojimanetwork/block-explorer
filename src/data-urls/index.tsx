export const HermesApiUrl = process.env.REACT_APP_HERMES_API_URL as string  //localhost:1317
export const HermesRpcUrl = process.env.REACT_APP_HERMES_RPC_URL as string  //localhost:26657
export const HermesRpcStatusUrl = `${HermesRpcUrl}status`
export const HermesRpcBlockByHeightUrl = `${HermesRpcUrl}block?height`
export const HermesApiNodesUrl = `${HermesApiUrl}hermeschain/nodes`
export const HermesApiBlockByHashUrl = `${HermesApiUrl}cosmos/tx/v1beta1/txs`
export const HermesApiPoolsUrl = `${HermesApiUrl}/hermeschain/pools`