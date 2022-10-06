import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import CustomPagintaion from "../../components/common/pagination";
import CustomTable from "../../components/common/table";
import VerticalFlex from "../../components/common/vertical.flex";
import { vpx22, vpx25 } from "../../constants/px.vh";
import useLanguage from "../../hooks/useLanguage";
import useNavi from "../../hooks/useNavi";
import { BlocksUrl } from "../../routes/route.constants";
import BlocksImg from "../../static/side-navbar/block.svg";

function BlocksTable() {
  const classes = useStyles();
  const lang = useLanguage();
  const { blocks } = lang.languageText.titles;
  const { navigateToUrl } = useNavi()
  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <HorizontalFlex>
          <CustomGrid md={6}>
            <HorizontalFlex alignItems="center">
              <img src={BlocksImg} alt="blocks" className={classes.imageRoot} />
              <Typography className={classes.title}>{blocks}</Typography>
            </HorizontalFlex>
          </CustomGrid>
          <CustomGrid md={6}>
            <HorizontalFlex justifyContent="flex-end">
              <CustomPagintaion />
            </HorizontalFlex>
          </CustomGrid>
        </HorizontalFlex>
        <CustomGrid className={classes.tableRoot} >
          <CustomTable
          rowOnClick={() => navigateToUrl(BlocksUrl)}
            headers={[
              "jejsj",
              "kflsjal",
              "jejsj",
              "kflsjal",
              "jejsj",
              "kflsjal",
              "jejsj",
              "kflsjal",
            ]}
            rows={[
              "kdsfghjk",
              "kdsfghjk",
              "kdsfghjk",
              "kdsfghjk",
              "kdsfghjk",
              "kdsfghjk",
            ]}
          />
        </CustomGrid>
        <CustomGrid md={12}>
            <HorizontalFlex justifyContent="flex-end">
              <CustomPagintaion />
            </HorizontalFlex>
          </CustomGrid>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.common.white,
    fontWeight: "400",
    fontSize: `${vpx22}`,
  },
  imageRoot: {
    height: `${vpx25}`,
    width: `${vpx25}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  tableRoot:{
    margin: `4vh 0px 3vh 0px`
  }
}));

export default BlocksTable;
