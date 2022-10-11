import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { AddressInfoData } from "../../components/constants/address/address.data";
import { vpx12, vpx14, vpx18, vpx22 } from "../../constants/px.vh";
import { wpx12 } from "../../constants/px.vw";
import TxItem from "../transactions/tx.item";

function AddressType() {
  const classes = useStyles();
  const addressInfo = AddressInfoData;

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid>
          <Typography className={classes.title}>Address Type 1</Typography>
        </CustomGrid>
        <CustomGrid md={12} className={classes.addressRoot}>
          <HorizontalFlex alignItems="center">
            <CustomGrid>
              <Typography className={classes.address}>
                8E445613CDFDF364F29F59B21DEE71DA1CEAFE231F7C8F4F722090FF89B16E2E
              </Typography>
            </CustomGrid>
            <CustomGrid>
              <ContentCopyRoundedIcon className={classes.copyIcon} />
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid>
          <Paper className={classes.infoCard}>
            <CustomGrid>
              <HorizontalFlex>
                {addressInfo.map((data) => (
                  <CustomGrid md={2}>
                    <VerticalFlex>
                      <Typography className={classes.infoTitle}>
                        {data.title}
                      </Typography>
                      <HorizontalFlex
                        className={classes.infoValueRoot}
                        alignItems="center"
                      >
                        <CustomGrid>
                          {data.image != null ? (
                            <img
                              src={data.image}
                              alt="image1"
                              className={classes.imageRoot}
                            />
                          ) : null}
                        </CustomGrid>
                        <CustomGrid>
                          <Typography className={classes.infoValue}>
                            {data.value}
                          </Typography>
                        </CustomGrid>
                      </HorizontalFlex>
                    </VerticalFlex>
                  </CustomGrid>
                ))}
              </HorizontalFlex>
            </CustomGrid>
          </Paper>
        </CustomGrid>
        <CustomGrid>
          <HorizontalFlex className={classes.txTitleRoot} >
            <Typography style={{ fontSize: `${vpx18}`, fontWeight: 'normal' }} className={classes.title}>Transactions</Typography>
          </HorizontalFlex>
          <TxItem />
        </CustomGrid>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: `${vpx22}`,
    color: "#f3f3f3",
    letterSpacing: `-0.44px`,
  },
  addressRoot: {
    margin: `1vh 0px 1vh 0px`,
  },
  address: {
    fontSize: `${vpx12}`,
    color: theme.palette.common.white,
    opacity: 0.5,
    fontWeight: 300,
    margin: `0px 0.5vw 0px 0px`,
  },
  copyIcon: {
    height: `${vpx14}`,
    width: `${wpx12}`,
    color: theme.palette.common.white,
    opacity: 0.5,
    cursor: "pointer",
  },
  infoCard: {
    height: `10vh`,
    backgroundColor: `rgba(39, 42, 44, 0.76)`,
    // opacity: 0.5,
    padding: "2vh 1.5vw 2vh 1.5vw",
    margin: `0.5vh 0px 2vh 0px`,
  },
  infoTitle: {
    color: theme.palette.common.white,
    fontSize: `${vpx12}`,
    fontWeight: 400,
    opacity: 0.6,
  },
  infoValue: {
    fontSize: `${vpx12}`,
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  infoValueRoot: {
    margin: `1vh 0px 0px 0px`,
  },
  imageRoot: {
    height: `${vpx14}`,
    margin: `0px 0.2vw 0px 0px`,
  },
  txTitleRoot:{
    margin: `1vh 0px 2vh 0px`,
  }
}));

export default AddressType;
