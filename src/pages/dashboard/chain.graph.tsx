import { Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import ChainGraph from '../../components/common/nivo.graph';
import { vpx14, vpx20 } from '../../constants/px.vh';
import { wpx20 } from '../../constants/px.vw';
import useLanguage from '../../hooks/useLanguage';
import BlocksIcon from '../../static/graph/blocks.svg';
import TxIcon from '../../static/graph/transaction.svg';

function DashboardGraph() {
  const classes = useStyles();
  const lang = useLanguage();
  const { txTitle, blockTitle } = lang.languageText.dashbord.graph_title;

  return (
    <CustomGrid md={11.5}>
      <Paper className={classes.paperRoot}>
        <HorizontalFlex justifyContent="flex-end">
          <CustomGrid>
            <img src={TxIcon} alt="dashboard" className={classes.iconRoot} />
          </CustomGrid>
          <CustomGrid>
            <Typography className={classes.txtRoot}>{txTitle}</Typography>
          </CustomGrid>
          <CustomGrid>
            <img
              src={BlocksIcon}
              alt="dashboard"
              className={classes.iconRoot}
            />
          </CustomGrid>
          <CustomGrid>
            <Typography className={classes.txtRoot}>{blockTitle}</Typography>
          </CustomGrid>
        </HorizontalFlex>
        <CustomGrid>
          <ChainGraph />
        </CustomGrid>
      </Paper>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  paperRoot: {
    height: `40vh`,
    // width: `30vw`,
    backgroundColor: 'transparent',
    // boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    // backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -80%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `2vh 2vw 2vh 2vw`,
    border: '0.5px solid rgba(255, 255, 255, 0.4)',
    opacity: 0.9,
    margin: `2.5vh 0px 0px 0px`
    // borderImage: 'linear-gradient(75deg, rgba(255, 255, 255, 0.4) 20%, #2e69ff 150%)',
    // borderImageSlice: '1',
    // borderRadius: '10px',
  },
  iconRoot: {
    height: `${vpx20}`,
    width: `${wpx20}`,
  },
  txtRoot: {
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: '300',
    letterSpacing: '-0.28px',
    opacity: 0.8,
    margin: `0px 2vw 0px 0px`,
  },
}));

export default DashboardGraph;
