import { TxHashDataReducerIfc } from "../providers/tx.hash.data.provider";

const txHashDataIniSt: TxHashDataReducerIfc = {
  txhashData: {
    tx: {
      auth_info: {},
      body: {
        extension_options: [],
        memo: "",
        messages: [
          {
            "@type": "",
            amount: [
              {
                amount: "",
                denom: "",
              },
            ],
            from_address: "",
            to_address: "",
          },
        ],
        non_critical_extension_options: [],
        timeout_height: "",
      },
      signatures: [],
    },
    tx_response: {
      code: 0,
      codespace: "",
      data: "",
      events: [],
      gas_used: "",
      gas_wanted: "",
      height: "",
      info: "",
      logs: [],
      raw_log: "",
      timestamp: "",
      tx: {},
      txhash: "",
    },
  },
};

const update_tx_hash_data = "UPDATE_TX_HASH_DATA";

const txHashDataReducer = (state = txHashDataIniSt, action: any) => {
  switch (action.type) {
    case update_tx_hash_data:
      return {
        ...state,
        txhashData: action.payload,
      };
    default:
      return { ...state };
  }
};

export { txHashDataIniSt, txHashDataReducer, update_tx_hash_data };
