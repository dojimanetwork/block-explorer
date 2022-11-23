import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { vpx10, vpx12 } from "../../constants/px.vh";
import VerticalFlex from "./vertical.flex";

interface LoaderIfc {
  margin?: string;
  loaderTxt?: string;
}

function NoDataText(props: LoaderIfc) {
  const classes = useStyles({ ...props });
  const { loaderTxt } = props;
  return (
    <VerticalFlex alignItems="center">
      <Typography className={classes.txt}>{loaderTxt}</Typography>
    </VerticalFlex>
  );
}

const useStyles = makeStyles<Theme, LoaderIfc>((theme: Theme) => ({
  txt: {
    color: theme.palette.common.white,
    fontSize: `${vpx12}`,
    fontWeight: "normal",
    fontStyle: "normal",
    opacity: 0.6,
    margin:({ margin }) => margin
  },
}));

export default NoDataText;
