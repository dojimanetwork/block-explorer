import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import CustomLoader from "../../components/common/loader";
import VerticalFlex from "../../components/common/vertical.flex";
import { px10, px3, px5 } from "../../constants/px.rem";
import { vpx10, vpx14, vpx18, vpx22, vpx30 } from "../../constants/px.vh";
import { wpx20 } from "../../constants/px.vw";
import useBlockChainData from "../../hooks/useBlockChainData";
import BlockImg from "../../static/side-navbar/block.svg";

function BlocksView() {
  const classes = useStyles();
  const { blockChainDataState } = useBlockChainData();
  const txsData = blockChainDataState.blockChainData;
  // console.log("Array ", blockChainDataState.blockChainData);

  return (
    <CustomGrid md={11.5}>
      <Paper className={classes.paperRoot}>
        <VerticalFlex>
          <CustomGrid md={12}>
            <HorizontalFlex>
              <CustomGrid md={6}>
                <HorizontalFlex alignItems="center">
                  <CustomGrid>
                    <img
                      src={BlockImg}
                      alt="dashboard"
                      className={classes.imageRoot}
                    />
                  </CustomGrid>
                  <CustomGrid>
                    <Typography className={classes.title}>Blocks</Typography>
                  </CustomGrid>
                </HorizontalFlex>
              </CustomGrid>
              <CustomGrid md={6}>
                <HorizontalFlex justifyContent="flex-end">
                  <img
                    src={BlockImg}
                    alt="dashboard"
                    className={classes.toggleRoot}
                  />
                </HorizontalFlex>
              </CustomGrid>
            </HorizontalFlex>
          </CustomGrid>
          <CustomGrid className={classes.contentRoot}>
            {txsData.length === 0 ? (
              <CustomLoader loaderMargin="20vh 0px 0px 0px"  loaderTxt="Please wait..." />
            ) : (
              txsData.map((data:any, index: number) => (
                <CustomGrid
                  key={`${data},${index}`}
                  md={12}
                  className={classes.titleRoot}
                >
                  <HorizontalFlex>
                    <CustomGrid md={6}>
                      <VerticalFlex>
                        <Typography className={classes.hashId}>
                          #{data.blockHeight}
                        </Typography>
                        <Typography className={classes.txValue}>
                          {data.latestHashTxs} Transaction
                        </Typography>
                      </VerticalFlex>
                    </CustomGrid>
                    <CustomGrid md={5.5}>
                      <HorizontalFlex justifyContent="flex-end">
                        <Typography className={classes.time}>
                          {data.latestTime} min ago
                        </Typography>
                      </HorizontalFlex>
                    </CustomGrid>
                  </HorizontalFlex>
                  <CustomGrid md={11.5}>
                    <div className={classes.horizontalDivider}></div>
                  </CustomGrid>
                </CustomGrid>
              ))
            )}
          </CustomGrid>
        </VerticalFlex>
      </Paper>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  paperRoot: {
    height: `60vh`,
    backgroundColor: "transparent",
    // backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -80%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `2vh 2vw 2vh 2vw`,
    border: "0.5px solid rgba(255, 255, 255, 0.4)",
    margin: `3.5vh 0px 1.5vh 0px`,
    opacity: 0.9,
    overflow: "scroll",
  },
  contentRoot: {
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "47vh",
    "&::-webkit-scrollbar-track": {
      border: theme.palette.grey[900],
      backgroundColor: theme.palette.grey[800],
    },
    "&::-webkit-scrollbar": {
      width: `${px3}`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundImage: "radial-gradient(at center, #fbb58a -20%, #ff751f 100%)",
      borderRadius: `${px10}`,
      maxHeight: `${px5}`,
    },
  },
  titleRoot: {
    margin: `1.5vh 0px 0px 0px`,
  },
  title: {
    fontSize: `${vpx18}`,
    color: theme.palette.common.white,
    fontWeight: "normal",
    letterSpacing: `-0.44px`,
  },
  imageRoot: {
    height: `${vpx22}`,
    width: `${wpx20}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  toggleRoot: {
    height: `${vpx30}`,
    width: `${wpx20}`,
  },
  hashId: {
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: "500",
    letterSpacing: "-0.28px",
  },
  txValue: {
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: "300",
    letterSpacing: "-0.28px",
    opacity: 0.8,
  },
  time: {
    color: theme.palette.common.white,
    fontSize: `${vpx10}`,
    fontWeight: "normal",
    fontStyle: "normal",
    opacity: 0.6,
  },
  horizontalDivider: {
    height: "0.6px",
    margin: `2vh 0px 0px 0px`,
    backgroundImage:
      "linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0.42) 100%)",
    opacity: 0.2,
  },
}));

export default BlocksView;
