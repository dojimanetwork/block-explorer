import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import CustomSearch from "../../components/common/custom.search";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { vpx12, vpx22, vpx25 } from "../../constants/px.vh";
import useLanguage from "../../hooks/useLanguage";
import TxImg from "../../static/dashboard/hor_tx.svg";
import CloseIcon from "@mui/icons-material/Close";
import { TxsTitles } from "../../components/constants/tx.data";
import { OrangeClr } from "../../constants/colors";
import TxTypeButton from "../../components/common/tx.type.btn";
import TxItem from "./tx.item";

function TransactionsView() {
  const classes = useStyles();
  const lang = useLanguage();
  const { txs } = lang.languageText.titles;
  const txTitlesData = TxsTitles;

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid md={12}>
          <HorizontalFlex alignItems="center">
            <CustomGrid>
              <img src={TxImg} alt="dashboard" className={classes.imageRoot} />
            </CustomGrid>
            <CustomGrid>
              <Typography className={classes.title}>{txs}</Typography>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12} className={classes.buttonsRoot}>
          <HorizontalFlex>
            <CustomGrid md={6}>
              <HorizontalFlex>
                <CustomSearch plcTxt="🔍   Search by type,hash/Txn" />
                <Paper className={classes.searchItem}>
                  <HorizontalFlex>
                    <Typography className={classes.searchItemTxt}>
                      92FFC23DEC
                    </Typography>
                    <CloseIcon className={classes.closeIcon} />
                  </HorizontalFlex>
                </Paper>
              </HorizontalFlex>
            </CustomGrid>
            <CustomGrid md={6}>
              <HorizontalFlex justifyContent="flex-end" >
              {txTitlesData.map((data) => (
                <TxTypeButton txt={data.txt} />
              ))}
              </HorizontalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid md={12} >
           <TxItem />     
        </CustomGrid>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  imageRoot: {
    height: `${vpx25}`,
    width: `${vpx25}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx22}`,
    color: theme.palette.common.white,
    fontWeight: "normal",
    letterSpacing: `-0.44px`,
  },
  buttonsRoot: {
    margin: `2vh 0px 0px 0px`,
  },
  searchItem: {
    borderRadius: "8px",
    backgroundColor: "rgba(0, 129, 255, 0.1)",
    width: "fit-content",
    height: "4vh",
    padding: "1vh 0.8vw 0px 1vw",
    color: `rgba(0, 129, 255, 0.1)`,
    border: "solid 0.5px rgba(0, 129, 255, 0.1)",
    margin: `0px 0px 0px 1vw`,
  },
  searchItemTxt: {
    fontSize: `${vpx12}`,
    color: "#0081ff",
    fontWeight: "normal",
  },
  closeIcon: {
    fontSize: "1.9vh",
    color: "#0081ff",
    margin: `0px 0px 0px 0.5vw`,
    cursor: "pointer",
  },
  txTypeTitles: {
    borderRadius: "3px",
    backgroundColor: "rgba(93, 93, 93, 0.1)",
    width: "fit-content",
    height: "4vh",
    padding: "1vh 0.8vw 0px 1vw",
    border: "solid 0.5px rgba(93, 93, 93, 0.1)",
    margin: `0px 0px 0px 0.7vw`,
    cursor: "pointer",
    "&:active": {
      backgroundColor: "rgba(255, 117, 31, 0.1)",
    },
  },
  txTypeTxt:{
    fontSize: `${vpx12}`,
    color: theme.palette.common.white,
    fontWeight: "normal",
    opacity: 0.45,
    "&:active":{
      color: OrangeClr,
      opacity: 1
    }
  }
}));

export default TransactionsView;
