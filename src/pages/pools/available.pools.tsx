import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { OrangeClr } from "../../constants/colors";
import { vpx12, vpx14, vpx16, vpx20, vpx32 } from "../../constants/px.vh";
import useNavi from "../../hooks/useNavi";
import usePoolsData from "../../hooks/usePoolsData";
import { PoolDetailsUrl } from "../../routes/route.constants";
// import DojImg from "../../static/chains/dojima-logo.svg";
import DojimaLogo from "../../static/dojima-logo.svg";

function AvailablePools() {
  const classes = useStyles();
  const { navigateToUrl } = useNavi();
  const { poolsDataState } = usePoolsData();

  return (
    <CustomGrid md={12} className={classes.root}>
      <HorizontalFlex>
        {poolsDataState.poolsData.map((data, index: number) => (
          <CustomGrid
            key={`${data},${index}`}
            md={2.5}
            className={classes.cardsRoot}
          >
            <Paper
              // onClick={() => navigateToUrl(PoolDetailsUrl)}
              className={classes.poolCard}
            >
              <VerticalFlex alignItems="center">
                <CustomGrid>
                  <img
                    src={DojimaLogo}
                    alt="doj"
                    className={classes.chainImg}
                  />
                </CustomGrid>
                <CustomGrid>
                  <Typography className={classes.title}>
                    {data.asset}
                  </Typography>
                </CustomGrid>
                <CustomGrid md={10}>
                  <Paper className={classes.insideCard}>
                    <VerticalFlex alignItems="center">
                      <CustomGrid>
                        <Typography
                          style={{ margin: "2vh 0px 0px 0.6vh" }}
                          className={classes.infoTitle}
                        >
                          balance doj
                        </Typography>
                        <Typography className={classes.infoValue}>
                          {data.balance_doj}
                        </Typography>
                      </CustomGrid>
                      <CustomGrid>
                        <HorizontalFlex justifyContent="center" alignItems="center">
                          {/* <CustomGrid>
                            <img
                              src={DojImg}
                              alt="chain"
                              className={classes.imageRoot}
                            />
                          </CustomGrid> */}
                          <CustomGrid>
                            <Typography
                              style={{ margin: "0px" }}
                              className={classes.infoTitle}
                            >
                             asset balance
                            </Typography>
                          </CustomGrid>
                        </HorizontalFlex>
                        <Typography className={classes.infoValue}>
                          {data.balance_asset}
                        </Typography>
                      </CustomGrid>
                      <CustomGrid>
                        <HorizontalFlex justifyContent="center" alignItems="center">
                          {/* <CustomGrid>
                            <img
                              src={DojimaLogo}
                              alt="chain"
                              className={classes.imageRoot}
                            />
                          </CustomGrid> */}
                          <CustomGrid>
                            <Typography
                              style={{ margin: "0px" }}
                              className={classes.infoTitle}
                            >
                              status
                            </Typography>
                          </CustomGrid>
                        </HorizontalFlex>
                        <Typography className={classes.infoValue}>
                          {data.status}
                        </Typography>
                      </CustomGrid>
                      {/* <CustomGrid>
                        <Typography className={classes.infoValue}>
                          {data.balance_asset}
                        </Typography>
                      </CustomGrid> */}
                    </VerticalFlex>
                  </Paper>
                </CustomGrid>
              </VerticalFlex>
            </Paper>
          </CustomGrid>
        ))}
      </HorizontalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: `${vpx20} 0px 0px 0px`,
  },
  cardsRoot: {
    margin: `0px 3vw 3vh 0px`,
  },
  poolCard: {
    height: `35vh`,
    backgroundColor: "#171717",
    border: "0.6px solid rgba(255, 255, 255, 0.1)",
    // cursor: "pointer",
  },
  chainImg: {
    height: `${vpx32}`,
    margin: `2vh 0px 0px 0px`,
  },
  imageRoot: {
    height: `${vpx14}`,
    margin: `0px 0.2vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx16}`,
    color: OrangeClr,
    fontWeight: 400,
    margin: `1.5vh 0px 0px 0px`,
  },
  insideCard: {
    height: `23vh`,
    backgroundColor: "#0000001f",
    width: `16vw`,
    margin: `0.7vh 0px 0px 0px`,
  },
  infoTitle: {
    color: theme.palette.common.white,
    fontSize: `${vpx12}`,
    fontWeight: 400,
    opacity: 0.6,
    margin: `1vh 0px 0px 0px`,
  },
  infoValue: {
    fontSize: `${vpx12}`,
    fontWeight: 400,
    margin: `0.3vh 0px 1vh 0px`,
    color: theme.palette.common.white,
  },
}));

export default AvailablePools;
