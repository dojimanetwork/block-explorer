import { Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { vpx8 } from '../../constants/px.vh';

interface ColoredPaperIf {
  color?: string;
  txt?: string;
}

function CustomColoredPaper(props: ColoredPaperIf) {
  const { color, txt } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.valuePaper} style={{ backgroundColor: color }}>
      <Typography className={classes.valuePaperTxt}>{txt}</Typography>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  valuePaper: {
    height: `1.8vh`,
    width: `fit-content`,
    padding: `0.1vh 0.5vw 0.1vh 0.5vw`,
    borderRadius: '2px',
    margin: `0px 0.5vw 0px 0px`,
  },
  valuePaperTxt: {
    color: theme.palette.common.white,
    fontSize: `${vpx8}`,
  },
}));

export default CustomColoredPaper;
