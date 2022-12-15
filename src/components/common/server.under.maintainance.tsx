import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "./custom.grid";
// import HorizontalFlex from "./horizontal.flex";
import VerticalFlex from "./vertical.flex";
import UnderMaintainanceImg from "../../static/under-maintainance.png";
import useLanguage from "../../hooks/useLanguage";
import ComingSoonImg from "../../static/coming_soon.png";

function ServerUnderMaintainance() {
  const classes = useStyles();
  const lang = useLanguage();
  const { title, under_maintainance } =
    lang.languageText.server_under_maintainance;
  return (
    <CustomGrid md={12} className={classes.root}>
      <VerticalFlex>
        <Typography className={classes.serverTxt}>{title}</Typography>
        <Typography className={classes.underMainTxt}>
          {under_maintainance}
        </Typography>
        <img
          src={ComingSoonImg}
          alt="coming-soon"
          className={classes.comingSoon}
        />
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${UnderMaintainanceImg})`,
    height: `100vh`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    padding: `17vh 5vw 10vh 8vw`,
  },
  serverTxt: {
    fontSize: `6.5vh`,
    color: `#EFEFEF`,
    opacity: 0.7,
    fontWeight: 300,
    letterSpacing: "0.01em",
  },
  underMainTxt: {
    fontSize: `7vh`,
    color: `#EFEFEF`,
    fontWeight: 600,
    letterSpacing: "0.01em",
  },
  comingSoon: {
    height: `2vh`,
    width: `18vw`,
    margin: `1vh 0px 0px 0px`,
  },
}));

export default ServerUnderMaintainance;
