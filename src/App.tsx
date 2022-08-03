import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Router, View } from "react-navi";
import CustomGrid from "./components/common/custom.grid";
import DojimaProvider from "./providers";
import { createBrowserNavigation } from "navi";
import routes from "./routes";
import { Suspense } from "react";
import { BackgroundClr } from "./constants/colors";

function App() {
  const classes = useStyles();
  const navigation = createBrowserNavigation({
    basename: process.env.PUBLIC_URL,
    routes,
  });

  return (
    <DojimaProvider>
      <Suspense>
        <Router navigation={navigation}>
          <CustomGrid md={12} className={classes.root}>
            <View />
          </CustomGrid>
        </Router>
      </Suspense>
    </DojimaProvider>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: `${BackgroundClr}`,
    height: '100vh'
  },
}));

export default App;
