import { Paper, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface PaperIfc {
  height?: string;
  width?: string;
  radiantClr?: string;
  margin?: string;
  padding?: string;
  bgClr?: string;
  children?: React.ReactNode;
}

function CustomPaper(props: PaperIfc) {
  const classes = useStyles({ ...props });
  const { children } = props;
  return <Paper className={classes.paperRoot}>{children}</Paper>;
}

const useStyles = makeStyles<Theme, PaperIfc>((theme: Theme) => ({
  paperRoot: {
    height: ({ height }) => height ?? `44vh`,
    width: ({ width }) => width ?? `12vw`,
    backgroundColor: ({ bgClr }) => bgClr ?? "transparent",
    boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    backgroundImage: ({ radiantClr }) =>
      `radial-gradient(50% 100% at 91.25% 0%, ${radiantClr} -100%, rgba(0, 0, 0, 0) 100%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) 2.57%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: ({ padding }) => padding ?? `1vh 1.2vw 1vh 1.2vw`,
    border: "0.5px solid rgba(255, 255, 255, 0.4)",
    margin: ({ margin }) => margin ?? `0px 0px 1.5vh 0px`,
  },
}));
export default CustomPaper;
