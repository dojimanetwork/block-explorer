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
    events: Array<any>;
    gas_used: string;
    gas_wanted: string;
    height: string;
    info: string;
    logs: Array<any>;
    raw_log: string;
    timestamp: string;
    tx: object;
    txhash: string;
  };
};

export type TxByHashTxType = {
  auth_info: object;
  body: {
    extension_options: Array<any>;
    memo: string;
    messages: Array<TxByHashMsgsType>;
    non_critical_extension_options: Array<any>;
    timeout_height: string;
  };
  signatures: Array<any>;
};

export type TxByHashMsgsType = {
  '@type': string;
  amount: Array<TxByHashAmountType>;
  from_address: string;
  to_address: string;
};

export type TxByHashAmountType = {
  amount: string;
  denom: string;
};
