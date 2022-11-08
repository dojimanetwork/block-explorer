export type TxByHashDetailsType = {
    config: string;
    data: TxByHashDataType;
    headers: string;
    request: string;
    status: number;
    statusText: string;
}

export type TxByHashDataType = {
    tx: object;
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
        txhash: string
    }
}