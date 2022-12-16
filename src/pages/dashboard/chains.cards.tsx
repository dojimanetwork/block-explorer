import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import CustomLoader from "../../components/common/loader";
import VerticalFlex from "../../components/common/vertical.flex";
import { px10, px5 } from "../../constants/px.rem";
import { vpx14, vpx30, vpx8 } from "../../constants/px.vh";
import { wpx25 } from "../../constants/px.vw";
import useBlockChainData from "../../hooks/useBlockChainData";
import DojimaLogo from "../../static/dojima-logo.svg";

function ChainsCards() {
  const classes = useStyles();
  const { blockChainDataState } = useBlockChainData();
  const txsData = blockChainDataState.blocksDataCards;

  return (
    <CustomGrid md={12} className={classes.root}>
      <HorizontalFlex justifyContent="center">
        {txsData.length === 0 ? (
          <CustomLoader
            loaderMargin="20vh 0px 0px 0px"
            loaderTxt="Please wait..."
          />
        ) : (
          <CustomGrid>
            <VerticalFlex direction="column-reverse" >
              {txsData.map((data, index: number) => (
                <Paper
                  className={classes.paperRoot}
                  style={{
                    backgroundImage: `radial-gradient(50% 100% at 91.25% 0%, #FF9CD0 -100%, rgba(0, 0, 0, 0) 100%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) 2.57%, rgba(255, 255, 255, 0.04) 97.48%)`,
                  }}
                  key={`${data},${index}`}
                >
                  <VerticalFlex>
                    <CustomGrid md={12}>
                      <HorizontalFlex>
                        <CustomGrid md={6}>
                          <HorizontalFlex alignItems="center">
                            <CustomGrid>
                              <img
                                src={DojimaLogo}
                                alt="chains"
                                className={classes.chainImg}
                              />
                            </CustomGrid>
                            <CustomGrid>
                              <Typography
                                className={classes.chainTitle}
                                style={{ color: "#E84142" }}
                              >
                                {data.validatorAddress.substring(1, 6)}
                              </Typography>
                            </CustomGrid>
                          </HorizontalFlex>
                        </CustomGrid>
                        <CustomGrid md={6}>
                          <HorizontalFlex justifyContent="flex-end">
                            <Typography className={classes.tokensNum}>
                              {data.latestHashTxs} Txns
                            </Typography>
                          </HorizontalFlex>
                        </CustomGrid>
                      </HorizontalFlex>
                    </CustomGrid>
                    <CustomGrid className={classes.timeRoot} md={12}>
                      <HorizontalFlex>
                        <CustomGrid md={6}>
                          <Typography className={classes.time}>
                            {data.latestTime} ago
                          </Typography>
                        </CustomGrid>
                        <CustomGrid md={6}>
                          <HorizontalFlex justifyContent="flex-end">
                            <Typography className={classes.hash}>
                              #{data.blockHeight}
                            </Typography>
                          </HorizontalFlex>
                        </CustomGrid>
                      </HorizontalFlex>
                    </CustomGrid>
                  </VerticalFlex>
                </Paper>
              ))}
            </VerticalFlex>
          </CustomGrid>
        )}
      </HorizontalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: `2.5vh 0px 0px 0px`,
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "38vh",
    "&::-webkit-scrollbar-track": {
      border: theme.palette.grey[900],
      backgroundColor: theme.palette.grey[800],
    },
    "&::-webkit-scrollbar": {
      width: `0px`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundImage: "radial-gradient(at center, #fbb58a -20%, #ff751f 100%)",
      borderRadius: `${px10}`,
      maxHeight: `${px5}`,
    },
  },
  paperRoot: {
    height: `12vh`,
    width: `17vw`,
    backgroundColor: "transparent",
    boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    padding: `1vh 1.2vw 1vh 1.2vw`,
    border: "0.5px solid rgba(255, 255, 255, 0.4)",
    margin: `0px 0px 1.5vh 0px`,
    // opacity: 0.7
  },
  chainImg: {
    height: `${vpx30}`,
    width: `${wpx25}`,
  },
  chainTitle: {
    fontSize: `${vpx14}`,
    fontWeight: 500,
    margin: `0px 0px 0px 0.5vw`,
    // color: `#b9b9b9`,
  },
  tokensNum: {
    color: `#b9b9b9`,
    fontSize: `${vpx14}`,
    fontWeight: 500,
    margin: `0.8vh 0px 0px 0vw`,
    fontStyle: "normal",
  },
  timeRoot: {
    margin: `2vh 0px 0px 0px`,
  },
  time: {
    color: theme.palette.common.white,
    fontSize: `${vpx8}`,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  hash: {
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: 600,
  },
}));

export default ChainsCards;
