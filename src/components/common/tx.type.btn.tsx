import { Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { OrangeClr } from '../../constants/colors';
import { vpx12 } from '../../constants/px.vh';

interface TxTypeIfc {
  txt?: string;
}

function TxTypeButton(props: TxTypeIfc) {
  const classes = useStyles();
  const { txt } = props;
  return (
    <Paper className={classes.txTypeTitles}>
      <Typography className={classes.txTypeTxt}>{txt}</Typography>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  txTypeTitles: {
    borderRadius: '3px',
    backgroundColor: 'rgba(93, 93, 93, 0.1)',
    width: 'fit-content',
    height: '4vh',
    padding: '1vh 0.8vw 0px 1vw',
    border: 'solid 0.5px rgba(93, 93, 93, 0.1)',
    margin: `0px 0px 0px 0.7vw`,
    cursor: 'pointer',
    '&:active': {
      backgroundColor: 'rgba(255, 117, 31, 0.1)',
    },
  },
  txTypeTxt: {
    fontSize: `${vpx12}`,
    color: theme.palette.common.white,
    fontWeight: 'normal',
    opacity: 0.45,
    '&:active': {
      color: OrangeClr,
      opacity: 1,
    },
  },
}));

export default TxTypeButton;
