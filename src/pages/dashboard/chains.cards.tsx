import { Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import VerticalFlex from '../../components/common/vertical.flex';
import { ChainCardsData } from '../../components/constants/dashboard/chain.cards.data';
import { vpx14, vpx30, vpx8 } from '../../constants/px.vh';
import { wpx25 } from '../../constants/px.vw';

function ChainsCards() {
  const classes = useStyles();
  const chainsData = ChainCardsData;
  return (
    <CustomGrid md={12} className={classes.root}>
      <HorizontalFlex justifyContent="center">
        <CustomGrid>
          {chainsData.map((data, index: number) => (
            <Paper
              className={classes.paperRoot}
              style={{
                backgroundImage: `radial-gradient(50% 100% at 91.25% 0%, ${data.radiantClr} -100%, rgba(0, 0, 0, 0) 100%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) 2.57%, rgba(255, 255, 255, 0.04) 97.48%)`,
              }}
              key={`${data},${index}`}
            >
              <VerticalFlex>
                <CustomGrid md={12}>
                  <HorizontalFlex>
                    <CustomGrid md={6}>
                      <HorizontalFlex alignItems="center">
                        <CustomGrid>
                          <img
                            src={data.chainImg}
                            alt="chains"
                            className={classes.chainImg}
                          />
                        </CustomGrid>
                        <CustomGrid>
                          <Typography
                            className={classes.chainTitle}
                            style={{ color: `${data.titleClr}` }}
                          >
                            {data.chainTitle}
                          </Typography>
                        </CustomGrid>
                      </HorizontalFlex>
                    </CustomGrid>
                    <CustomGrid md={6}>
                      <HorizontalFlex justifyContent="flex-end">
                        <Typography className={classes.tokensNum}>
                          {data.tokensNum} Txns
                        </Typography>
                      </HorizontalFlex>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid className={classes.timeRoot} md={12}>
                  <HorizontalFlex>
                    <CustomGrid md={6}>
                      <Typography className={classes.time}>
                        {data.time} ago
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={6}>
                      <HorizontalFlex justifyContent="flex-end">
                        <Typography className={classes.hash}>
                          #{data.hashNum}
                        </Typography>
                      </HorizontalFlex>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
              </VerticalFlex>
            </Paper>
          ))}
        </CustomGrid>
      </HorizontalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: `2.5vh 0px 0px 0px`,
  },
  paperRoot: {
    height: `12vh`,
    width: `17vw`,
    backgroundColor: 'transparent',
    boxShadow: '10px 15px 10px 0 rgba(0, 0, 0, 0.2)',
    padding: `1vh 1.2vw 1vh 1.2vw`,
    border: '0.5px solid rgba(255, 255, 255, 0.4)',
    margin: `0px 0px 1.5vh 0px`,
    // opacity: 0.7
  },
  chainImg: {
    height: `${vpx30}`,
    width: `${wpx25}`,
  },
  chainTitle: {
    fontSize: `${vpx14}`,
    fontWeight: 500,
    margin: `0px 0px 0px 0.5vw`,
  },
  tokensNum: {
    color: `#b9b9b9`,
    fontSize: `${vpx14}`,
    fontWeight: 500,
    margin: `0.8vh 0px 0px 0vw`,
    fontStyle: 'normal',
  },
  timeRoot: {
    margin: `2vh 0px 0px 0px`,
  },
  time: {
    color: theme.palette.common.white,
    fontSize: `${vpx8}`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  hash: {
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: 600,
  },
}));

export default ChainsCards;
