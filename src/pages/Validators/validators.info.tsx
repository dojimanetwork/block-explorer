import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import BlankPaper from "../../components/common/blank.paper";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { OrangeClr } from "../../constants/colors";
import {
  vpx12,
  vpx14,
  vpx16,
  vpx22,
  vpx25,
  vpx30,
} from "../../constants/px.vh";
import { wpx15 } from "../../constants/px.vw";
import BlocksImg from "../../static/side-navbar/block.svg";

function ValidatorsInfo() {
  const classes = useStyles();
  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <HorizontalFlex alignItems="center">
          <img src={BlocksImg} alt="blocks" className={classes.imageRoot} />
          <Typography className={classes.title}>
            Node: DOJ613CDFDF364F29F59B21DEE71DA1CEAFE231F7C8F4F7
          </Typography>
          <ContentCopyRoundedIcon className={classes.copyIcon} />
        </HorizontalFlex>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  IP Address
                </Typography>
                <Typography className={classes.infoValue}>2,153</Typography>
              </VerticalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </BlankPaper>
        <BlankPaper height="28vh">
          <VerticalFlex>
            <HorizontalFlex>
              <Typography className={classes.infoTitle}>
                Public Keys:
              </Typography>
              <Typography
                style={{ color: OrangeClr, margin: "0px 0px 0px 0.5vw" }}
                className={classes.infoTitle}
              >
                Secp256k1
              </Typography>
            </HorizontalFlex>
            <BlankPaper
              margin="1vh 0px 2vh 0px"
              height="7vh"
              width="80vw"
              backgroundClr="#171717"
            >
              <Typography className={classes.publicKeyAdd}>
                thorpubladdwnpepqf20rus4yxstenrmyvw2mlxcqp3m4s3xf4zfhen59qr3tjlnvmzsxpzvkvr
              </Typography>
            </BlankPaper>
            <HorizontalFlex>
              <Typography className={classes.infoTitle}>
                Public Keys:
              </Typography>
              <Typography
                style={{ color: OrangeClr, margin: "0px 0px 0px 0.5vw" }}
                className={classes.infoTitle}
              >
                Secp256k1
              </Typography>
            </HorizontalFlex>
            <BlankPaper
              margin="1vh 0px 0px 0px"
              height="7vh"
              width="80vw"
              backgroundClr="#171717"
            >
              <Typography className={classes.publicKeyAdd}>
                thorpubladdwnpepqf20rus4yxstenrmyvw2mlxcqp3m4s3xf4zfhen59qr3tjlnvmzsxpzvkvr
              </Typography>
            </BlankPaper>
          </VerticalFlex>
        </BlankPaper>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  IP Address
                </Typography>
                <Typography className={classes.infoValue}>2,153</Typography>
              </VerticalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </BlankPaper>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  IP Address
                </Typography>
                <Typography className={classes.infoValue}>2,153</Typography>
              </VerticalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </BlankPaper>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  IP Address
                </Typography>
                <Typography className={classes.infoValue}>2,153</Typography>
              </VerticalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </BlankPaper>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.common.white,
    fontWeight: "normal",
    fontSize: `${vpx22}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  imageRoot: {
    height: `${vpx25}`,
    width: `${vpx25}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  copyIcon: {
    height: `${vpx30}`,
    width: `${wpx15}`,
    color: OrangeClr,
    opacity: 0.5,
    cursor: "pointer",
  },
  infoTitle: {
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: 400,
    opacity: 0.6,
  },
  infoValue: {
    fontSize: `${vpx12}`,
    fontWeight: 400,
    margin: `1vh 0px 0px 0px`,
    color: theme.palette.common.white,
  },
  publicKeyAdd: {
    fontSize: `${vpx16}`,
    fontWeight: 300,
    margin: `0.3vh 0px 0px 0px`,
    color: theme.palette.common.white,
  },
}));

export default ValidatorsInfo;
