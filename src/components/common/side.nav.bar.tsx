import { GridSize, Paper, SvgIconTypeMap, Theme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { SideNavBarClr } from "../../constants/colors";
// import { menuData } from "../../constants/menu";
import { px40 } from "../../constants/px.rem";
import { vpx30 } from "../../constants/px.vh";
import { wpx30 } from "../../constants/px.vw";
import IcSettingsImg from "../../static/side-navbar/ic-settings.svg";
import { restoreMenuBar } from "../../utils/helpers";
import {
  getPrevPrivateMenuIndex,
  storePrevPrivateMenuIndex,
} from "../../utils/storage";
// import { SideNavBarData } from "../constants/side.navbar.data";
import CustomGrid from "./custom.grid";
import IconTextLink from "./icon.text.link";
import VerticalFlex from "./vertical.flex";
import FindIndex from "lodash/findIndex";
import useNavi from "../../hooks/useNavi";

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

function SideNavBar(props: MenuBarProps) {
  const classes = useStyles();
  // const sideNavBarImages = SideNavBarData;
  // const menu = menuData;
  const { menuItems } = props;
  const { navigateToUrl } = useNavi();
  const prevClickedIndex = getPrevPrivateMenuIndex();
  const [menu, setMenu] = useState<Array<MenuItem>>(() =>
    prevClickedIndex ? restoreMenuBar(menuItems, prevClickedIndex) : menuItems
  );

  const onBackButtonEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleMenu();
  };

  const handleMenu = () => {
    const url = window.location.pathname;
    const idx = FindIndex(menuItems, (item: MenuItem) =>
      url.includes(item.link)
    );

    if (idx < 0) return;

    const activeIdx = FindIndex(menu, { active: true });

    menu[activeIdx].active = false;
    menu[idx].active = true;

    setMenu([...menu]);
    storePrevPrivateMenuIndex(idx);
  };

  const handleMenuActive = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    navigateToUrl(`${menu[index].link}`);
  };
  useEffect(() => {
    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleMenu();
    // eslint-disable-next-line
  }, [window.location.pathname]);

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
              onClick={(e) => handleMenuActive(e, index)}
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
