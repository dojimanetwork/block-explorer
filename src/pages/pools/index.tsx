import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import VerticalFlex from '../../components/common/vertical.flex';
import { vpx22 } from '../../constants/px.vh';
import useLanguage from '../../hooks/useLanguage';
import PoolsImg from '../../static/side-navbar/validators.svg';
import AvailablePools from './available.pools';
// import PoolDetails from "./pool.details";

function Pools() {
  const classes = useStyles();
  const lang = useLanguage();
  const { pools } = lang.languageText.titles;

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid>
          <HorizontalFlex alignItems="center">
            <CustomGrid>
              <img src={PoolsImg} alt="pools" className={classes.imageRoot} />
            </CustomGrid>
            <CustomGrid>
              <Typography className={classes.title}>{pools}</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid>
          <AvailablePools />
          {/* <PoolDetails /> */}
        </CustomGrid>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  imageRoot: {
    height: `3vh`,
    width: `fit-content`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx22}`,
    color: theme.palette.common.white,
    fontWeight: 'normal',
    letterSpacing: `-0.44px`,
  },
}));

export default Pools;
