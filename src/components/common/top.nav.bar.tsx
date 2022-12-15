import { AppBar, Theme, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { TxByHashDetailsType } from "../../api/tx.by.hash.api";
import { TopNavBarClr } from "../../constants/colors";
import { vpx14, vpx80 } from "../../constants/px.vh";
import { wpx6 } from "../../constants/px.vw";
import useNavi from "../../hooks/useNavi";
import useTxHashData from "../../hooks/useTxHashData";
import { update_tx_hash_data } from "../../reducers/tx.hash.data.reducer";
import { TxHashInfoSearchUrl } from "../../routes/route.constants";
import DojimaTextLogo from "../../static/top-navbar/dojima-logo.svg";
// import { TopNavBarHeadersData } from "../constants/dashboard/top.navbar.data";
import CustomGrid from "./custom.grid";
import CustomSearch from "./custom.search";
import HorizontalFlex from "./horizontal.flex";
// import TextSwitch from "./text.switch";
// import VerticalFlex from "./vertical.flex";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useSnackbar from "../../hooks/useSnackBar";
import { HermesApiBlockByHashUrl } from "../../data-urls";

function TopNavBar() {
  const classes = useStyles();
  // const HeaderData = TopNavBarHeadersData;
  const { TxHashDataDispatch } = useTxHashData();
  const { navigateToUrl } = useNavi();
  const [hashValue, setHashValue] = useState<string | undefined>("");
  const { DisplayMessage } = useSnackbar()

  const handleTxHashSearch = async () => {
    try {
      let details: TxByHashDetailsType = await axios.get(
        `${HermesApiBlockByHashUrl}/${hashValue}`
      );
      // console.log(details);
      if (details.status === 200) {
        if (hashValue !== "") {
          TxHashDataDispatch({
            type: update_tx_hash_data,
            payload: details.data,
          });
          navigateToUrl(TxHashInfoSearchUrl);
        }
      }
    } catch (error) {
      DisplayMessage("Please Check Tx Hash","error")
    }
  };

  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <HorizontalFlex alignItems="center">
          <CustomGrid md={5}>
            <img
              src={DojimaTextLogo}
              alt="dojima"
              className={classes.dojimaImageRoot}
            />
          </CustomGrid>
          <CustomGrid md={7}>
            <HorizontalFlex justifyContent="flex-end" >
              <CustomGrid md={4}>
                <HorizontalFlex alignItems="center">
                  <CustomSearch
                    onChangePlc={(hash) => setHashValue(hash)}
                    plcTxt="Search By TxHash"
                  />
                  <SearchIcon
                    style={{
                      cursor: "pointer",
                      height: "3.1vh",
                      margin: `0px 0px 0px 0.5vw`,
                      color: "white",
                      opacity: 0.6,
                    }}
                    onClick={() => handleTxHashSearch()}
                  />
                  {/* <Typography onClick={() => handleTxHashSearch()} style={{ cursor: "pointer"}} >Click</Typography> */}
                </HorizontalFlex>
              </CustomGrid>
              {/* {HeaderData.map((data, index: number) => (
                <CustomGrid md={2} key={`${data},${index}`}>
                  <HorizontalFlex alignItems="flex-end">
                    <CustomGrid>
                      <img
                        src={data.icon}
                        alt="top"
                        className={classes.iconRoot}
                      />
                    </CustomGrid>
                    <CustomGrid>
                      <VerticalFlex>
                        <CustomGrid className={classes.titleRoot}>
                          <Typography className={classes.title}>
                            {data.title}
                          </Typography>
                          <Typography
                            style={{
                              fontSize: `${vpx14}`,
                              letterSpacing: "0.3px",
                              fontWeight: 500,
                              color: data.color,
                            }}
                          >
                            ${data.value}
                          </Typography>
                        </CustomGrid>
                      </VerticalFlex>
                    </CustomGrid>
                    <CustomGrid className={classes.dividerRoot}>
                      <div className={classes.verticalDivider}></div>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
              ))} */}
              {/* <CustomGrid md={2} className={classes.switchRoot}>
                <TextSwitch />
              </CustomGrid> */}
            </HorizontalFlex>
          </CustomGrid>
        </HorizontalFlex>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: `${vpx80}`,
    backgroundColor: `${TopNavBarClr}`,
    padding: "0vh 2vh 0px 2vh",
  },
  logoRoot: {
    height: `3.5vh`,
    width: `2vw`,
  },
  dojimaImageRoot: {
    height: `3.5vh`,
    width: `8vw`,
  },
  iconRoot: {
    height: `2.5vh`,
    width: `1.5vw`,
  },
  titleRoot: {
    margin: `0px 0px 0px ${wpx6}`,
  },
  title: {
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: "normal",
    letterSpacing: "-0.18px",
  },
  switchRoot: {
    margin: `0.5vh 0px 0px 0px`,
  },
  dividerRoot: {
    margin: `0px 0px 0px 2vw`,
  },
  verticalDivider: {
    width: "2px",
    height: "30px",
    backgroundColor: theme.palette.common.black,
    margin: `0px 0px 0px 0px`,
  },
}));

export default TopNavBar;
