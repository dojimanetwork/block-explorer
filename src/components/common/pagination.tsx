import { Pagination, Stack, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { OrangeClr } from '../../constants/colors';
import { vpx16 } from '../../constants/px.vh';

function CustomPagintaion() {
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination
        className={classes.pagination}
        variant="outlined"
        shape="rounded"
        count={10}
      />
    </Stack>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  pagination: {
    '& .MuiPaginationItem-root': {
      color: OrangeClr,
      fontSize: `${vpx16}`,
      border: '0px',
      '&.Mui-selected': {
        background: OrangeClr,
        color: 'white',
        height: `3vh`,
      },
    },
  },
}));

export default CustomPagintaion;
