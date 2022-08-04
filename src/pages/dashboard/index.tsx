import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { PriceClr } from "../../constants/colors";
import { vpx22, vpx25 } from "../../constants/px.vh";
import DashboardImg from "../../static/side-navbar/dash.svg";
import Blocks from "./blocks";
import ChainGraph from "./chain.graph";
import ChainsCards from "./chains.cards";
import DailyStatus from "./daily.status";
import Transactions from "./transactions";

function DashboardView() {
  const classes = useStyles();

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid>
          <HorizontalFlex alignItems="center">
            <CustomGrid>
              <img
                src={DashboardImg}
                alt="dashboard"
                className={classes.imageRoot}
              />
            </CustomGrid>
            <CustomGrid>
              <Typography className={classes.title}>Dashboard</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12} >
          <HorizontalFlex>
            <CustomGrid md={3.5}>
              <ChainsCards />
            </CustomGrid>
            <CustomGrid>
              <DailyStatus />
            </CustomGrid>
            <CustomGrid>
              <ChainGraph />
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid>
          <HorizontalFlex>
            <CustomGrid md={6}>
              <Transactions />
            </CustomGrid>
            <CustomGrid md={6} >
              <Blocks />
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles(() => ({
  imageRoot: {
    height: `${vpx25}`,
    width: `${vpx25}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx22}`,
    color: PriceClr,
    fontWeight: "bold",
    letterSpacing: `-0.44px`,
  },
}));

export default DashboardView;
