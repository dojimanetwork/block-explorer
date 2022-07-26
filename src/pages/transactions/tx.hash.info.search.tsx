import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { convertISOtoUTC } from "../../api";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { OrangeClr } from "../../constants/colors";
import { vpx12, vpx15, vpx18, vpx20, vpx8 } from "../../constants/px.vh";
import { wpx15 } from "../../constants/px.vw";
import useLanguage from "../../hooks/useLanguage";
import useNavi from "../../hooks/useNavi";
import useTxHashData from "../../hooks/useTxHashData";
import { DashboardUrl } from "../../routes/route.constants";

function TxHashInfoSearch() {
  const classes = useStyles();
  const lang = useLanguage();
  const { title1, title2, title4, title, title5, title6, title7, title8 } =
    lang.languageText.transaction.tx_hash_info;
  const { txhashDataState } = useTxHashData();
  const txDataTx = txhashDataState.txhashData.tx;
  console.log("txs data",txDataTx);
  const txDataResponse = txhashDataState.txhashData.tx_response;
  const { navigateToUrl } = useNavi();

  useEffect(() => {
    if (txDataResponse.txhash === "") {
      navigateToUrl(DashboardUrl);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <CustomGrid className={classes.root} md={11.5}>
      <VerticalFlex>
        <Paper className={classes.paperRoot}>
          <VerticalFlex>
            <CustomGrid md={12}>
              <Typography className={classes.title}>{title}</Typography>
              <CustomGrid md={1.5}>
                <div className={classes.horizontalDivider}></div>
              </CustomGrid>
            </CustomGrid>
            <CustomGrid md={12} className={classes.headerRoot}>
              <VerticalFlex>
                <CustomGrid md={12}>
                  <HorizontalFlex>
                    <CustomGrid md={2} className={classes.valueRoot}>
                      <Typography className={classes.valueTitle}>
                        {title1}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <HorizontalFlex alignItems="center">
                        <Typography className={classes.value}>
                          {txDataResponse.txhash}
                        </Typography>
                        <ContentCopyIcon className={classes.copyIcon} />
                      </HorizontalFlex>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title2}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography className={classes.value}>
                        {txDataResponse.height}
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title5}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography style={{ color: OrangeClr }} className={classes.value}>
                        {txDataTx.body.messages.length > 0
                          ? txDataTx.body.messages[0].amount.length > 0
                            ? txDataTx.body.messages[0].amount[0].amount
                            : "undefined"
                          : "undefined"}
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title8}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography
                        className={classes.value}
                        style={{ color: OrangeClr }}
                      >
                        {txDataResponse.gas_used}
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title6}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography className={classes.value}>
                        {txDataTx.body.messages.length > 0
                          ? txDataTx.body.messages[0].from_address
                          : ""}
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title4}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography className={classes.value}>
                        {convertISOtoUTC(txDataResponse.timestamp)}
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title7}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography className={classes.value}>
                        {txDataTx.body.messages.length > 0
                          ? txDataTx.body.messages[0].to_address
                          : ""}
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
              </VerticalFlex>
            </CustomGrid>
          </VerticalFlex>
        </Paper>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "4vh 0px 0px 0px",
  },
  paperRoot: {
    minHeight: `30vh`,
    backgroundColor: "transparent",
    // boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    // backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -80%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `3.2vh 1.5vw 3.5vh 1.5vw`,
    border: "0.5px solid rgba(255, 255, 255, 0.4)",
    opacity: 0.9,
    borderRadius: "8px",
  },
  memosPaper: {
    height: `13vh`,
    backgroundColor: "transparent",
    // boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    // backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -80%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `3.2vh 1.5vw 13.5vh 1.5vw`,
    border: "0.5px solid rgba(255, 255, 255, 0.4)",
    opacity: 0.9,
    margin: `2.5vh 0px 2.5vh 0px`,
    borderRadius: "8px",
  },
  title: {
    color: theme.palette.common.white,
    fontSize: `${vpx20}`,
    fontWeight: "normal",
    letterSpacing: "-0.36px",
    opacity: 0.6,
  },
  horizontalDivider: {
    height: "0.6px",
    backgroundImage:
      "linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0.42) 100%)",
    opacity: 0.2,
  },
  headerRoot: {
    margin: `2.4vh 0px 0px 0px`,
  },
  valueRoot: {
    margin: `0px 0px 1.7vh 0px`,
  },
  valueTitle: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: "normal",
    letterSpacing: "-0.36px",
    opacity: 0.7,
    width: `10vw`,
  },
  dots: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    opacity: 0.7,
  },
  value: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: "normal",
    letterSpacing: "-0.36px",
  },
  copyIcon: {
    fontSize: `${vpx12}`,
    color: OrangeClr,
    margin: `0px 0px 0px 0.5vw`,
    opacity: 0.8,
  },
  arrowIcon: {
    fontSize: `${vpx18}`,
    color: theme.palette.common.white,
    margin: `0px 1vw 0px 1vw`,
    opacity: 0.8,
  },
  valuePaper: {
    height: `1.8vh`,
    width: `fit-content`,
    padding: `0.1vh 0.5vw 0.1vh 0.5vw`,
    borderRadius: "2px",
    margin: `0px 0.5vw 0px 0px`,
  },
  valuePaperTxt: {
    color: theme.palette.common.white,
    fontSize: `${vpx8}`,
  },
  chainLogo: {
    height: `${vpx15}`,
    width: `${wpx15}`,
    margin: `0px 0.3vw 0px 0px`,
  },
  memosTxt: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: "normal",
    letterSpacing: "-0.36px",
    margin: `2vh 0px 0px 0px`,
  },
  outTxt: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: "normal",
    letterSpacing: "-0.36px",
    margin: `0px 0px 0px 0px`,
  },
}));

export default TxHashInfoSearch;
