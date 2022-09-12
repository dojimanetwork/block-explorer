import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomColoredPaper from "../../components/common/colored.paper";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import {
  BackgroundClr,
  BlueClr,
  GreenClr,
  OrangeClr,
  RedClr,
} from "../../constants/colors";
import { vpx10, vpx12, vpx14, vpx15, vpx5, vpx9 } from "../../constants/px.vh";
import { wpx12, wpx15 } from "../../constants/px.vw";
import PolkaImg from "../../static/chains/polkadot.svg";
import TxImg from "../../static/dashboard/hor_tx.svg";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { TxData } from "../../components/constants/txs/tx.data";
import { px10, px3, px5 } from "../../constants/px.rem";

function TxItem() {
  const classes = useStyles();
  const txData = TxData;

  return (
    <CustomGrid md={12} className={classes.root} >
      <VerticalFlex>
        {txData.map((data) => (
          <CustomGrid className={classes.cardRoot} >
            <HorizontalFlex>
              <CustomGrid md={2.7}>
                <Paper className={classes.txTypeTitleCard}>
                  <HorizontalFlex alignItems="center">
                    <CustomGrid md={10}>
                      <HorizontalFlex>
                        <Typography className={classes.txTypeTitleTxt}>
                          {data.txType}
                        </Typography>
                        <Typography className={classes.txTypeDate}>
                          {data.dataTime}
                        </Typography>
                      </HorizontalFlex>
                    </CustomGrid>
                    <CustomGrid md={2}>
                      <HorizontalFlex justifyContent="flex-end">
                        <Paper className={classes.txTypeNum}>
                          <Typography className={classes.txTypeNumTxt}>
                            {data.num}
                          </Typography>
                        </Paper>
                      </HorizontalFlex>
                    </CustomGrid>
                  </HorizontalFlex>
                </Paper>
              </CustomGrid>
              <CustomGrid md={8.8}>
                <Paper className={classes.txTypeRightTopCard}>
                  <HorizontalFlex>
                    <CustomColoredPaper color={GreenClr} txt="ObsTxIn" />
                    <CustomColoredPaper color={RedClr} txt="Network fee" />
                    <CustomColoredPaper color={OrangeClr} txt="refund" />
                  </HorizontalFlex>
                </Paper>
              </CustomGrid>
            </HorizontalFlex>
            <CustomGrid>
              <HorizontalFlex>
                <CustomGrid md={2.77}>
                  <Paper className={classes.txTypeLeftCard}>
                    <VerticalFlex>
                      <Typography className={classes.hashAddress}>
                        #{data.hashAddress}
                      </Typography>
                      <HorizontalFlex alignItems="center">
                        <img
                          src={PolkaImg}
                          alt="dojima"
                          className={classes.chainImg}
                        />
                        <Typography className={classes.gasFeeNum}>
                          {data.gasFee}
                        </Typography>
                      </HorizontalFlex>
                    </VerticalFlex>
                  </Paper>
                </CustomGrid>
                <CustomGrid md={8.73}>
                  <Paper className={classes.txTypeRightCard}>
                    <VerticalFlex>
                      <HorizontalFlex alignItems="center">
                        <img
                          src={PolkaImg}
                          alt="dojima"
                          className={classes.chainImg}
                        />
                        <Typography className={classes.chainName}>
                          {data.chainName}
                        </Typography>
                      </HorizontalFlex>
                      <HorizontalFlex
                        alignItems="center"
                        className={classes.textMargin}
                      >
                        <img
                          src={TxImg}
                          alt="dojima"
                          className={classes.chainImg}
                        />
                        <Typography className={classes.address}>
                          {data.chainAdd}
                        </Typography>
                        <ContentCopyRoundedIcon className={classes.copyIcon} />
                        <EastRoundedIcon className={classes.arrowIcon} />
                        <Typography className={classes.address}>
                          {data.chainType}
                        </Typography>
                      </HorizontalFlex>
                      <HorizontalFlex
                        alignItems="center"
                        className={classes.textMargin}
                      >
                        <img
                          src={PolkaImg}
                          alt="dojima"
                          className={classes.chainImg}
                        />
                        <Typography
                          style={{ color: "#fff" }}
                          className={classes.address}
                        >
                          {data.numCoins}
                        </Typography>
                      </HorizontalFlex>
                    </VerticalFlex>
                  </Paper>
                </CustomGrid>
              </HorizontalFlex>
            </CustomGrid>
          </CustomGrid>
        ))}
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root:{
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "70vh",
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
  cardRoot:{
    margin: `0px 0px 2.5vh 0px`
  },
  txTypeTitleCard: {
    borderRadius: "6px",
    backgroundColor: `${BackgroundClr}`,
    height: "4vh",
    padding: "1vh 0.8vw 0px 1vw",
    color: `rgba(0, 129, 255, 0.1)`,
    border: `solid 0.5px ${BlueClr}`,
    margin: `0px 0px 0px 0vw`,
    opacity: 0.75,
  },
  txTypeTitleTxt: {
    fontSize: `${vpx12}`,
    color: theme.palette.common.white,
    fontWeight: "normal",
  },
  txTypeDate: {
    fontSize: `${vpx12}`,
    color: theme.palette.common.white,
    fontWeight: "normal",
    margin: `0px 0px 0px 0.5vw`,
    opacity: 0.5,
  },
  txTypeNum: {
    borderRadius: "2px",
    backgroundColor: `#343739`,
    width: "fit-content",
    height: "2vh",
    padding: "0.2vh 0.4vw 0px 0.4vw",
    color: `rgba(0, 129, 255, 0.1)`,
    margin: `0px 0px 0px 1.5vw`,
  },
  txTypeNumTxt: {
    fontSize: `${vpx9}`,
    color: theme.palette.common.white,
    fontWeight: "normal",
  },
  txTypeLeftCard: {
    borderRadius: "6px 0px 0px 6px",
    backgroundColor: "transparent",
    height: "14vh",
    padding: "1vh 0.8vw 0px 1vw",
    color: `rgba(0, 129, 255, 0.1)`,
    border: `solid 0.5px #4b4e4f`,
    margin: `0vh 0px 0px 0vw`,
    opacity: 0.8,
    borderWidth: '0.5px 0px 0.5px 0.5px',
    boxShadow: "none",
  },
  txTypeRightCard: {
    backgroundColor: "transparent",
    height: "14vh",
    padding: "2vh 0.8vw 0px 1vw",
    color: `rgba(0, 129, 255, 0.1)`,
    border: `solid #4b4e4f`,
    opacity: 0.8,
    borderWidth: '0px 0.5px 0.5px 0px',
    boxShadow: "none",
    borderRadius: "0px 0px 6px 0px",
    margin: `0px 0px 0px 0vw`,
  },
  txTypeRightTopCard: {
    backgroundColor: "transparent",
    height: "4.8vh",
    padding: "1.2vh 0.8vw 0px 1vw",
    color: `rgba(0, 129, 255, 0.1)`,
    border: `solid 0.5px #4b4e4f`,
    margin: `0px 0px 0px 0.5vw`,
    opacity: 0.75,
    borderBottomWidth: "0px",
    boxShadow: "none",
    borderRadius: "6px 6px 0px 0px",
  },
  hashAddress: {
    fontSize: `${vpx14}`,
    fontWeight: 500,
    color: OrangeClr,
    letterSpacing: "0.14px",
    margin: `${vpx5} 0px ${vpx10} 0px`,
  },
  chainImg: {
    height: `${vpx15}`,
    width: `${wpx15}`,
  },
  gasFeeNum: {
    fontSize: `${vpx14}`,
    fontWeight: "normal",
    color: theme.palette.common.white,
    margin: `0px 0px 0px 0.6vw`,
  },
  chainName: {
    fontSize: `${vpx14}`,
    fontWeight: 500,
    color: theme.palette.common.white,
    margin: `0px 0px 0px 0.5vw`,
  },
  address: {
    fontSize: `${vpx14}`,
    fontWeight: "normal",
    color: OrangeClr,
    margin: `0px 0.3vw 0px 0.5vw`,
  },
  copyIcon: {
    height: `${vpx14}`,
    width: `${wpx12}`,
    color: theme.palette.common.white,
    opacity: 0.7,
  },
  arrowIcon: {
    height: `${vpx14}`,
    width: `${wpx12}`,
    color: theme.palette.common.white,
    margin: `0px 0.5vw 0px 0.7vw`,
  },
  textMargin: {
    margin: `1vh 0px 0px 0px`,
  },
}));

export default TxItem;
