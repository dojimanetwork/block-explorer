import { Typography } from '@mui/material'
import React from 'react'
import useTxHashData from '../../hooks/useTxHashData'

function TxHashInfoSearch() {
  const { txhashDataState } = useTxHashData()
  return (
    <Typography>{txhashDataState.txhashData.tx_response.height}</Typography>
  )
}

export default TxHashInfoSearch