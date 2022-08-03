import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../components/common/custom.grid";
import SideNavBar from "../components/common/side.nav.bar";
import TopNavBar from "../components/common/top.nav.bar";

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <TopNavBar />
      <CustomGrid xs={12} md={12} className={classes.root}>
        <SideNavBar />
      </CustomGrid>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //height: "103vh",
    padding: `12vh 0px 0px 0px`
    // overflow: 'hidden'
  },
}));

export default HomePage;
