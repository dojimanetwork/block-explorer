import { GridSize, Paper, SvgIconTypeMap, Theme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { makeStyles } from "@mui/styles";
import { SideNavBarClr } from "../../constants/colors";
import { menuData } from "../../constants/menu";
import { px40 } from "../../constants/px.rem";
import { vpx30 } from "../../constants/px.vh";
import { wpx30 } from "../../constants/px.vw";
import IcSettingsImg from "../../static/side-navbar/ic-settings.svg";
// import { SideNavBarData } from "../constants/side.navbar.data";
import CustomGrid from "./custom.grid";
import IconTextLink from "./icon.text.link";
import VerticalFlex from "./vertical.flex";

export interface MenuItem {
  name?: any;
  active: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | any;
  link: string;
  public?: boolean;
  private?: boolean;
  md?: GridSize | boolean | any;
  mobile: boolean;
  desktop: boolean;
}
export interface MenuBarProps {
  menuItems: Array<MenuItem>;
}

function SideNavBar() {
  const classes = useStyles();
  // const sideNavBarImages = SideNavBarData;
  const menu = menuData;
  const handleClick = () => {};

  return (
    <Paper className={classes.root}>
      <CustomGrid>
        <VerticalFlex alignItems="center">
          {/* {sideNavBarImages.map((data, index: number) => (
            <img
              src={data.image}
              className={classes.imageRoot}
              alt="side-img"
              key={`${data},${index}`}
              onClick={() => alert("cli")}
            />
          ))} */}
          {menu.map((menuItem: MenuItem, index: number) => (
            <IconTextLink
              text={menuItem.name}
              link={menuItem.link}
              isActive={menuItem.active}
              index={index}
              key={`${menuItem.name}, ${index}`}
              onClick={handleClick}
            />
          ))}
          <img
            src={IcSettingsImg}
            alt="settings"
            className={classes.settingsImage}
          />
        </VerticalFlex>
      </CustomGrid>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: `65vh`,
    backgroundColor: `${SideNavBarClr}`,
    padding: "4vh 0vh 4vh 0vh",
    width: `5vw`,
    boxShadow: "-2px 0 30px 0 rgba(0, 129, 255, 0.2)",
    borderTopRightRadius: `${px40}`,
    borderBottomRightRadius: `${px40}`,
    position: "fixed",
  },
  imageRoot: {
    margin: `0px 0px 4vh 0px`,
    height: `${vpx30}`,
    width: `${wpx30}`,
    cursor: "pointer",
  },
  settingsImage: {
    margin: `10vh 0px 0px 0px`,
    height: `${vpx30}`,
    width: `${wpx30}`,
    cursor: "pointer",
  },
}));

export default SideNavBar;
