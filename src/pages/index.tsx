import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { View } from 'react-navi';
import HandleDashFunCalls from '../api';
import CustomGrid from '../components/common/custom.grid';
import HorizontalFlex from '../components/common/horizontal.flex';
import SideNavBar from '../components/common/side.nav.bar';
import TopNavBar from '../components/common/top.nav.bar';
import { menuData } from '../constants/menu';

function DojimaBlockExplorer() {
  const classes = useStyles();

  return (
    <>
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
      <HandleDashFunCalls />
    </>
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
