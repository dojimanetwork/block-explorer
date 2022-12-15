import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { View } from "react-navi";
import HandleDashFunCalls from "../api";
import CustomGrid from "../components/common/custom.grid";
import HorizontalFlex from "../components/common/horizontal.flex";
import ServerUnderMaintainance from "../components/common/server.under.maintainance";
import SideNavBar from "../components/common/side.nav.bar";
import TopNavBar from "../components/common/top.nav.bar";
import { menuData } from "../constants/menu";
import useBlockChainData from "../hooks/useBlockChainData";

function DojimaBlockExplorer() {
  const classes = useStyles();
  const { blockChainDataState } = useBlockChainData();
  return (
    <CustomGrid md={12}>
      {blockChainDataState.underMaintainance === "success" ? (
        <CustomGrid>
          <HandleDashFunCalls />
          <TopNavBar />
          <CustomGrid xs={12} md={12} className={classes.root}>
            <HorizontalFlex>
              <CustomGrid md={1}>
                <SideNavBar menuItems={menuData} />
              </CustomGrid>
              <CustomGrid md={11}>
                <main>
                  <View />
                </main>
              </CustomGrid>
            </HorizontalFlex>
          </CustomGrid>
        </CustomGrid>
      ) : (
        <ServerUnderMaintainance />
      )}
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // height: "100vh",
    padding: `12vh 2vw 0px 0px`,
    // overflow: 'hidden'
  },
}));

export default DojimaBlockExplorer;
