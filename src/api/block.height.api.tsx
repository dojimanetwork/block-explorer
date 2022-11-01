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
  data: {
    txs: [];
  };
  evidence: object;
  last_commit: object;
};
