import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { AvailablePoolsData } from "../../components/constants/pools/available.pools";
import { OrangeClr } from "../../constants/colors";
import { vpx12, vpx14, vpx16, vpx20, vpx32 } from "../../constants/px.vh";
import DojImg from "../../static/chains/binance.svg";
import Img from "../../static/pools/bnb.svg";

function AvailablePools() {
  const classes = useStyles();
  const availablePools = AvailablePoolsData;

  return (
    <CustomGrid md={12} className={classes.root}>
      <HorizontalFlex>
        {availablePools.map((data) => (
          <CustomGrid md={2.5} className={classes.cardsRoot} >
            <Paper className={classes.poolCard}>
              <VerticalFlex alignItems="center">
                <CustomGrid>
                  <img src={Img} alt="bnb" className={classes.chainImg} />
                </CustomGrid>
                <CustomGrid>
                  <Typography className={classes.title}>
                    {data.chain}
                  </Typography>
                </CustomGrid>
                <CustomGrid md={10}>
                  <Paper className={classes.insideCard}>
                    <VerticalFlex alignItems="center">
                      <CustomGrid>
                        <Typography
                          style={{ margin: "2vh 0px 0px 1.5vh" }}
                          className={classes.infoTitle}
                        >
                          {data.title1}
                        </Typography>
                        <Typography className={classes.infoValue}>
                          ${data.value1}
                        </Typography>
                      </CustomGrid>
                      <CustomGrid>
                        <HorizontalFlex alignItems="center">
                          <CustomGrid>
                            <img
                              src={DojImg}
                              alt="dashboard"
                              className={classes.imageRoot}
                            />
                          </CustomGrid>
                          <CustomGrid>
                            <Typography
                              style={{ margin: "0px" }}
                              className={classes.infoTitle}
                            >
                              {data.title2}
                            </Typography>
                          </CustomGrid>
                        </HorizontalFlex>
                        <Typography className={classes.infoValue}>
                          {data.value2}
                        </Typography>
                      </CustomGrid>
                      <CustomGrid>
                        <HorizontalFlex alignItems="center">
                          <CustomGrid>
                            <img
                              src={DojImg}
                              alt="dashboard"
                              className={classes.imageRoot}
                            />
                          </CustomGrid>
                          <CustomGrid>
                            <Typography
                              style={{ margin: "0px" }}
                              className={classes.infoTitle}
                            >
                              {data.title3}
                            </Typography>
                          </CustomGrid>
                        </HorizontalFlex>
                        <Typography className={classes.infoValue}>
                          {data.value3}
                        </Typography>
                      </CustomGrid>
                      <CustomGrid>
                        <Typography className={classes.infoValue}>
                          {data.value4}
                        </Typography>
                      </CustomGrid>
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
  cardsRoot:{
    margin: `0px 3vw 3vh 0px`
  },
  poolCard: {
    height: `35vh`,
    backgroundColor: "#171717",
    border: "0.6px solid rgba(255, 255, 255, 0.1)",
  },
  chainImg: {
    height: `${vpx32}`,
    margin: `2vh 0px 0px 0px`,
  },
  imageRoot: {
    height: `${vpx14}`,
    margin: `0px 0.5vw 0px 0px`,
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
