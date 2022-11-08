import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BlankPaper from "../../components/common/blank.paper";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { GreenClr, OrangeClr } from "../../constants/colors";
import { vpx14, vpx16, vpx22, vpx25, vpx30 } from "../../constants/px.vh";
import { wpx15 } from "../../constants/px.vw";
import useLanguage from "../../hooks/useLanguage";
import useNodeData from "../../hooks/useNodeDetails";
import BlocksImg from "../../static/side-navbar/block.svg";

function ValidatorsInfo() {
  const classes = useStyles();
  const { nodeDataState } = useNodeData();
  const nodeDetails = nodeDataState.nodeData;
  const lang = useLanguage();
  const {
    node,
    ip_add,
    slash_point,
    status,
    bond,
    version,
    public_keys,
    current_award,
    rq_to_leave,
    forced_to_leave,
    leave_height,
    jail_address,
    jail_reason,
    jail_release,
  } = lang.languageText.vallidators_info_titles;

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <HorizontalFlex alignItems="center">
          <img src={BlocksImg} alt="blocks" className={classes.imageRoot} />
          <Typography className={classes.title}>
            {node}: {nodeDetails.node_address}
          </Typography>
          <ContentCopyRoundedIcon className={classes.copyIcon} />
        </HorizontalFlex>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {ip_add}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.ip_address}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>{version}</Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.version}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>{status}</Typography>
                <Typography
                  style={{ color: GreenClr }}
                  className={classes.infoValue}
                >
                  {nodeDetails.status}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </BlankPaper>
        <BlankPaper height="28vh">
          <VerticalFlex>
            <HorizontalFlex>
              <Typography className={classes.infoTitle}>
                {public_keys}:
              </Typography>
              <Typography
                style={{ color: OrangeClr, margin: "0px 0px 0px 0.5vw" }}
                className={classes.infoTitle}
              >
                {Object.keys(nodeDetails.pub_key_set)[0]}
              </Typography>
            </HorizontalFlex>
            <BlankPaper
              margin="1vh 0px 2vh 0px"
              height="7vh"
              width="80vw"
              backgroundClr="#171717"
            >
              <Typography className={classes.publicKeyAdd}>
                {nodeDetails.pub_key_set.secp256k1}
              </Typography>
            </BlankPaper>
            <HorizontalFlex>
              <Typography className={classes.infoTitle}>
                {public_keys}:
              </Typography>
              <Typography
                style={{ color: OrangeClr, margin: "0px 0px 0px 0.5vw" }}
                className={classes.infoTitle}
              >
                {Object.keys(nodeDetails.pub_key_set)[1]}
              </Typography>
            </HorizontalFlex>
            <BlankPaper
              margin="1vh 0px 0px 0px"
              height="7vh"
              width="80vw"
              backgroundClr="#171717"
            >
              <Typography className={classes.publicKeyAdd}>
                {nodeDetails.pub_key_set.ed25519}
              </Typography>
            </BlankPaper>
          </VerticalFlex>
        </BlankPaper>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>{bond}</Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.bond}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {slash_point}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.slash_points}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {current_award}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.current_award}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </BlankPaper>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {rq_to_leave}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.requested_to_leave === false ? "FALSE" : "TRUE"}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {forced_to_leave}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.forced_to_leave === false ? "FALSE" : "TRUE"}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                 {leave_height}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.leave_height}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </BlankPaper>
        <BlankPaper height="10vh">
          <HorizontalFlex>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {jail_address}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.jail.node_address}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {jail_release}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.jail.hasOwnProperty("release_height") === false
                    ? "-"
                    : JSON.stringify(nodeDetails.jail.release_height)}
                </Typography>
              </VerticalFlex>
            </CustomGrid>
            <CustomGrid md={4}>
              <VerticalFlex>
                <Typography className={classes.infoTitle}>
                  {jail_reason}
                </Typography>
                <Typography className={classes.infoValue}>
                  {nodeDetails.jail.hasOwnProperty("reason") === false
                    ? "-"
                    : JSON.stringify(nodeDetails.jail.reason)}
                </Typography>
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
    fontSize: `${vpx16}`,
    fontWeight: "normal",
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
