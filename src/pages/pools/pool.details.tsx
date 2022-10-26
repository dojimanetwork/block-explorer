import CheckIcon from '@mui/icons-material/Check';
import { Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import CustomPagintaion from '../../components/common/pagination';
import VerticalFlex from '../../components/common/vertical.flex';
import { PoolInfoData } from '../../components/constants/pools/available.pools';
import { vpx12, vpx14, vpx22, vpx35 } from '../../constants/px.vh';
import { wpx20 } from '../../constants/px.vw';
import EthImg from '../../static/pools/eth.svg';
import TxItem from '../transactions/tx.item';
import PoolsSelectButtons from './pool.select.buttons';

function PoolDetails() {
  const classes = useStyles();
  const poolInfoData = PoolInfoData;

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid md={12}>
          <HorizontalFlex>
            <CustomGrid md={6}>
              <HorizontalFlex>
                <img src={EthImg} alt="chain" className={classes.chainImg} />
                <CustomGrid>
                  <Typography className={classes.title}>ETH.ETH</Typography>
                </CustomGrid>
              </HorizontalFlex>
            </CustomGrid>
            <CustomGrid md={6}>
              <HorizontalFlex justifyContent="flex-end">
                <Paper className={classes.searchItem}>
                  <HorizontalFlex>
                    <CheckIcon className={classes.crctIcon} />
                    <Typography className={classes.searchItemTxt}>
                      92FFC23DEC
                    </Typography>
                  </HorizontalFlex>
                </Paper>
              </HorizontalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid>
          <Paper className={classes.infoCard}>
            <CustomGrid>
              <HorizontalFlex>
                {poolInfoData.map((data) => (
                  <CustomGrid md={1.7}>
                    <VerticalFlex>
                      <Typography className={classes.infoTitle}>
                        {data.title}
                      </Typography>
                      <HorizontalFlex alignItems="center">
                        <CustomGrid>
                          {data.image1 != null ? (
                            <img
                              src={data.image1}
                              alt="image1"
                              className={classes.imageRoot}
                            />
                          ) : null}
                        </CustomGrid>
                        <CustomGrid>
                          <Typography className={classes.infoValue}>
                            {data.value1}
                          </Typography>
                        </CustomGrid>
                      </HorizontalFlex>
                      <HorizontalFlex alignItems="center">
                        {data.image2 != null ? (
                          <img
                            src={data.image2}
                            alt="image1"
                            className={classes.imageRoot}
                          />
                        ) : null}
                        <Typography
                          style={{ margin: `0.5vh 0px 0px 0.2vw` }}
                          className={classes.infoValue}
                        >
                          {data.value2}
                        </Typography>
                      </HorizontalFlex>
                    </VerticalFlex>
                  </CustomGrid>
                ))}
              </HorizontalFlex>
            </CustomGrid>
          </Paper>
        </CustomGrid>
        <CustomGrid md={12}>
          <HorizontalFlex>
            <CustomGrid md={6}>
              <PoolsSelectButtons
                txt1="Transaction"
                txt2="Provider"
                txt3="Vault"
              />
            </CustomGrid>
            <CustomGrid md={6}>
              <HorizontalFlex justifyContent="flex-end">
                <Paper className={classes.searchItem}>
                  <HorizontalFlex>
                    <CheckIcon className={classes.crctIcon} />
                    <Typography className={classes.searchItemTxt}>
                      92FFC23DEC
                    </Typography>
                  </HorizontalFlex>
                </Paper>
              </HorizontalFlex>
            </CustomGrid>
          </HorizontalFlex>
        </CustomGrid>
        <CustomGrid>
          <TxItem />
        </CustomGrid>
        <CustomGrid className={classes.paginationRoot} md={12}>
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
    fontWeight: '400',
    fontSize: `${vpx22}`,
  },
  infoCard: {
    height: `13vh`,
    backgroundColor: `rgba(39, 42, 44, 0.76)`,
    padding: '2vh 1.5vw 2vh 1.5vw',
    margin: `2vh 0px 2vh 0px`,
  },
  infoTitle: {
    color: theme.palette.common.white,
    fontSize: `${vpx12}`,
    fontWeight: 400,
    opacity: 0.6,
    margin: `0px 0px 1vh 0px`,
  },
  infoValue: {
    fontSize: `${vpx12}`,
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  chainImg: {
    height: `${vpx35}`,
    width: `${wpx20}`,
    margin: `0px 1vw 0px 0px`,
  },
  searchItem: {
    borderRadius: '8px',
    backdropFilter: 'blur(30px)',
    backgroundColor: 'rgba(0, 105, 42, 0.06)',
    width: 'fit-content',
    height: '4vh',
    padding: '1vh 0.8vw 0px 1vw',
    color: `rgba(0, 129, 255, 0.1)`,
    border: 'solid 0.5px rgba(0, 129, 255, 0.1)',
    margin: `0px 0px 0px 1vw`,
  },
  searchItemTxt: {
    fontSize: `${vpx12}`,
    color: '#008134',
    fontWeight: 'normal',
  },
  crctIcon: {
    fontSize: '1.9vh',
    color: '#008134',
    margin: `0px 0.5vw 0px 0vw`,
    cursor: 'pointer',
  },
  imageRoot: {
    height: `${vpx14}`,
    margin: `0px 0.2vw 0px 0px`,
  },
  paginationRoot: {
    margin: `2vh 0px 2vh 0px`,
  },
}));

export default PoolDetails;
