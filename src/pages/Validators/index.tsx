import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { PriceClr } from "../../constants/colors";
import { vpx22, vpx25 } from "../../constants/px.vh";
import ValidatorsImg from "../../static/side-navbar/validators.svg";
import StatusItemView from "./status.view.item";
import CustomTable from "./table";

function ValidatorsView() {
  const classes = useStyles();

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
              <Typography className={classes.title}>Validators</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12} >
          <HorizontalFlex>
            <StatusItemView/>
            <CustomTable headers={[]} rows={[]} />
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

const useStyles = makeStyles(() => ({
  imageRoot: {
    height: `${vpx25}`,
    width: `${vpx25}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx22}`,
    color: PriceClr,
    fontWeight: "bold",
    letterSpacing: `-0.44px`,
  },
}));

export default ValidatorsView; 
