export type BlockByHeightType = {
  jsonrpc: string;
  id: number;
  result: BlockByHeightResultType;
};

export type BlockByHeightResultType = {
  block: BlockByHeightBlockType;
  block_id: object;
};

export type BlockByHeightBlockType = {
  header: object;
  data: {
    txs: [];
  };
  evidence: object;
  last_commit: {
    height: string;
    round: number;
    block_id: {
      hash: string;
      parts: {
        total: number;
        hash: string;
      };
    };
    signatures: [
      {
        block_id_flag: number;
        validator_address: string;
        timestamp: string;
        signature: string;
      }
    ];
  };
};
