import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { PriceClr } from "../../constants/colors";
import { vpx18, vpx22, vpx30 } from "../../constants/px.vh";
import { wpx20 } from "../../constants/px.vw";
import TransactionImg from "../../static/side-navbar/transaction.svg";

function Transactions() {
  const classes = useStyles();

  return (
    <CustomGrid md={11}>
      <Paper className={classes.paperRoot}>
        <VerticalFlex>
          <CustomGrid md={12}>
            <HorizontalFlex>
              <CustomGrid md={6}>
                <HorizontalFlex alignItems="center">
                  <CustomGrid>
                    <img
                      src={TransactionImg}
                      alt="dashboard"
                      className={classes.imageRoot}
                    />
                  </CustomGrid>
                  <CustomGrid>
                    <Typography className={classes.title}>
                      Transactions
                    </Typography>
                  </CustomGrid>
                </HorizontalFlex>
              </CustomGrid>
              <CustomGrid md={6}>
                <HorizontalFlex justifyContent="flex-end">
                  <img
                    src={TransactionImg}
                    alt="dashboard"
                    className={classes.toggleRoot}
                  />
                </HorizontalFlex>
              </CustomGrid>
            </HorizontalFlex>
          </CustomGrid>
          <CustomGrid md={12} >
              <HorizontalFlex>
                <CustomGrid md={6}>
                  <VerticalFlex>
                    <Typography>EC5199047E0A21E41248EE414</Typography>
                    <Typography>EC5199047E0A21E41248EE414</Typography>
                  </VerticalFlex>
                </CustomGrid>
                <CustomGrid md={6} ></CustomGrid>
              </HorizontalFlex>
          </CustomGrid>
        </VerticalFlex>
      </Paper>
    </CustomGrid>
  );
}

const useStyles = makeStyles(() => ({
  paperRoot: {
    height: `60vh`,
    // width: `12vw`,
    backgroundColor: "transparent",
    // boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    // backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -80%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `2vh 1.2vw 2vh 1.2vw`,
    border: "0.5px solid rgba(255, 255, 255, 0.4)",
    margin: `3.5vh 0px 1.5vh 0px`,
    opacity: 0.9,
  },
  title: {
    fontSize: `${vpx18}`,
    color: PriceClr,
    fontWeight: "bold",
    letterSpacing: `-0.44px`,
  },
  imageRoot: {
    height: `${vpx22}`,
    width: `${wpx20}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  toggleRoot: {
    height: `${vpx30}`,
    width: `${wpx20}`,
  },
}));

export default Transactions;
