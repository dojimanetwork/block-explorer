import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { vpx22, vpx30 } from "../../constants/px.vh";
import { wpx30 } from "../../constants/px.vw";
import useLanguage from "../../hooks/useLanguage";
import ValidatorsImg from "../../static/side-navbar/validators.svg";
import StatusItemView from "./status.view.item";
import CustomTable from "./table";

function ValidatorsView() {
  const classes = useStyles();
  const lang = useLanguage();
  const { validators } = lang.languageText.titles

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid>
          <HorizontalFlex alignItems="center">
            <CustomGrid>
              <img
                src={ValidatorsImg}
                alt="dashboard"
                className={classes.imageRoot}
              />
            </CustomGrid>
            <CustomGrid>
              <Typography className={classes.title}>{validators}</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12} >
          <HorizontalFlex>
            <StatusItemView/>
            <CustomTable headers={['jejsj','kflsjal','jejsj','kflsjal','jejsj','kflsjal','jejsj','kflsjal']} rows={['kdsfghjk','kdsfghjk','kdsfghjk','kdsfghjk','kdsfghjk','kdsfghjk']} />
          </HorizontalFlex>
        </CustomGrid>
        {/* <CustomGrid>
          <HorizontalFlex>
            <CustomGrid md={6}>
              <Transactions />
            </CustomGrid>
            <CustomGrid md={6} >
              <Blocks />
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid> */}
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  imageRoot: {
    height: `${vpx30}`,
    width: `${wpx30}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx22}`,
    color: '#f3f3f3',
    letterSpacing: `-0.44px`,
  },
}));

export default ValidatorsView; 
