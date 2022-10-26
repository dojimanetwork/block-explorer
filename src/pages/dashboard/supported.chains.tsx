import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import { SupportedChainData } from '../../components/constants/dashboard/supported.chains.data';
import { SupportedClr } from '../../constants/colors';
import { vpx18, vpx30 } from '../../constants/px.vh';
import { wpx25 } from '../../constants/px.vw';
import IcBlockImg from '../../static/side-navbar/ic_block_chain.svg';

function SupportedChains() {
  const classes = useStyles();
  const chainData = SupportedChainData;

  return (
    <CustomGrid className={classes.root}>
      <CustomGrid>
        <HorizontalFlex alignItems="center">
          <CustomGrid>
            <img
              src={IcBlockImg}
              alt="dashboard"
              className={classes.imageRoot}
            />
          </CustomGrid>
          <CustomGrid>
            <Typography className={classes.title}>Supported chains</Typography>
          </CustomGrid>
        </HorizontalFlex>
      </CustomGrid>
      <CustomGrid md={12} className={classes.coinsRoot}>
        <HorizontalFlex>
          {chainData.map((data, index: number) => (
            <CustomGrid key={`${data},${index}`} md={1.5}>
              <HorizontalFlex>
                <CustomGrid>
                  <img
                    src={data.icon}
                    alt="chains"
                    className={classes.chainImg}
                  />
                </CustomGrid>
                <CustomGrid>
                  <Typography className={classes.chainTitle}>
                    {data.title}
                  </Typography>
                </CustomGrid>
              </HorizontalFlex>
            </CustomGrid>
          ))}
        </HorizontalFlex>
      </CustomGrid>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: `4vh 0px 0px 0px`,
  },
  imageRoot: {
    height: `${vpx30}`,
    width: `${vpx30}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    fontSize: `${vpx18}`,
    color: theme.palette.common.white,
    fontWeight: 'normal',
    letterSpacing: `-0.44px`,
  },
  coinsRoot: {
    margin: `4vh 0px 2vh 1vw`,
  },
  chainImg: {
    height: `${vpx30}`,
    width: `${wpx25}`,
  },
  chainTitle: {
    fontSize: `${vpx18}`,
    fontWeight: 'normal',
    margin: `0px 0px 0px 0.5vw`,
    color: SupportedClr,
  },
}));
export default SupportedChains;
