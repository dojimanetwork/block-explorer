import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { PriceClr } from "../../constants/colors";
import { vpx22, vpx25 } from "../../constants/px.vh";
import BlocksImg from "../../static/side-navbar/block.svg";
import CustomTable from "../../components/common/table";

function BlocksView() {
  const classes = useStyles();

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid>
          <HorizontalFlex alignItems="center">
            <CustomGrid>
              <img
                src={BlocksImg}
                alt="dashboard"
                className={classes.imageRoot}
              />
            </CustomGrid>
            <CustomGrid>
              <Typography className={classes.title}>Blocks</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12} >
          <HorizontalFlex>
            <CustomTable headers={[]} rows={[]} />
          </HorizontalFlex>
        </CustomGrid>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles(() => ({
  imageRoot: {
    height: `${vpx25}`,
    width: `${vpx25}`,
    margin: `0px 0.5vw 20px 0px`,
  },
  title: {
    fontSize: `${vpx22}`,
    color: PriceClr,
    fontWeight: "bold",
    letterSpacing: `-0.44px`,
    margin: `0px 0px 20px 0px`,

  },
}));

export default BlocksView; 
