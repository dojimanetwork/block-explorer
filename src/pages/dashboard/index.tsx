import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { vpx22, vpx25 } from "../../constants/px.vh";
import useLanguage from "../../hooks/useLanguage";
import DashboardImg from "../../static/side-navbar/dash.svg";
import Blocks from "./blocks";
import ChainGraph from "./chain.graph";
import ChainsCards from "./chains.cards";
import DailyStatus from "./daily.status";
import SupportedChains from "./supported.chains";
import Transactions from "./transactions";

function DashboardView() {
  const classes = useStyles();
  const lang = useLanguage();
  const { dashboard } = lang.languageText.titles

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
              <Typography className={classes.title}>{dashboard}</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12}>
          <HorizontalFlex>
            <CustomGrid md={3.5}>
              <ChainsCards />
            </CustomGrid>
            <CustomGrid md={1.6}>
              <DailyStatus />
            </CustomGrid>
            <CustomGrid md={6.9}>
              <ChainGraph />
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12}>
          <HorizontalFlex>
            <CustomGrid md={6}>
              <Transactions />
            </CustomGrid>
            <CustomGrid md={6}>
              <Blocks />
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12}>
          <SupportedChains />
        </CustomGrid>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  imageRoot: {
    height: `${vpx25}`,
    width: `${vpx25}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx22}`,
    color: theme.palette.common.white,
    fontWeight: "normal",
    letterSpacing: `-0.44px`,
  },
}));

export default DashboardView;
