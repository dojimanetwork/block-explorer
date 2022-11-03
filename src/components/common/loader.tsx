import { Theme, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { vpx10 } from "../../constants/px.vh";
import VerticalFlex from "./vertical.flex";

interface LoaderIfc {
    loaderMargin?: string;
    loaderTxt?: string
}

function CustomLoader(props: LoaderIfc) {
    const classes = useStyles({ ...props });
    const { loaderTxt} = props
  return (
    <VerticalFlex alignItems="center" >
      <CircularProgress className={classes.loader} size="2.5vh"/>
      <Typography className={classes.txt} >{loaderTxt}</Typography>
    </VerticalFlex>
  );
}

const useStyles = makeStyles<Theme, LoaderIfc>((theme: Theme) =>({
    loader:{
        margin: ({ loaderMargin }) => loaderMargin ?? `0px`
    },
    txt:{
        color: theme.palette.common.white,
        fontSize: `${vpx10}`,
        fontWeight: "normal",
        fontStyle: "normal",
        opacity: 0.6,
        margin: `${vpx10} 0px 0px 0px`
    }
}))

export default CustomLoader;
