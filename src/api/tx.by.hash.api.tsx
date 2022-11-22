export type TxByHashDetailsType = {
  config: string;
  data: TxByHashDataType;
  headers: string;
  request: string;
  status: number;
  statusText: string;
};

export type TxByHashDataType = {
  tx: TxByHashTxType;
  tx_response: {
    code: number;
    codespace: string;
    data: string;
    events: Array<object>;
    gas_used: string;
    gas_wanted: string;
    height: string;
    info: string;
    logs: Array<object>;
    raw_log: string;
    timestamp: string;
    tx: object;
    txhash: string;
  };
};

export type TxByHashTxType = {
  auth_info: string;
  body: {
    extension_options: Array<object>;
    memo: string;
    messages: Array<TxByHashMsgsType>;
    non_critical_extension_options: [];
    timeout_height: string;
  };
  signatures: string;
};

export type TxByHashMsgsType = {
  '@type': string;
  coins: Array<TxByHashCoinsType>;
  memo: string;
  signer: string;
};

export type TxByHashCoinsType = {
  asset: string;
  amount: string;
  decimals: string;
};
