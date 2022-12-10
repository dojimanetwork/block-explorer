export type PoolsDataType = {
  balance_doj: string;
  balance_asset: string;
  asset: string;
  LP_units: string;
  pool_units: string;
  status: string;
  decimals: number;
  synth_units: string;
  synth_supply: string;
  pending_inbound_doj: string;
  pending_inbound_asset: string;
};

export type PoolsData = Array<PoolsDataType>
