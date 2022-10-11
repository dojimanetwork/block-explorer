import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { vpx22, vpx30 } from "../../constants/px.vh";
import { wpx30 } from "../../constants/px.vw";
import useLanguage from "../../hooks/useLanguage";
import ValidatorsImg from "../../static/side-navbar/validators.svg";
import CustomTable from "../../components/common/table";
import useNavi from "../../hooks/useNavi";
import { AddressTypeUrl } from "../../routes/route.constants";

function AddressView() {
  const classes = useStyles();
  const lang = useLanguage();
  const { address } = lang.languageText.titles;
  const { navigateToUrl } = useNavi()

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
              <Typography className={classes.title}>{address}</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid className={classes.tableRoot}>
          <CustomTable
          rowOnClick={() => navigateToUrl(AddressTypeUrl)}
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
    color: "#f3f3f3",
    letterSpacing: `-0.44px`,
  },
  tableRoot: {
    margin: `3vh 0px 0px 0px`,
  },
}));

export default AddressView;
