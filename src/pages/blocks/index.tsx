import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import VerticalFlex from '../../components/common/vertical.flex';
import { BlocksInfoData } from '../../components/constants/blocks/blocks.data';
import { vpx12, vpx14, vpx22 } from '../../constants/px.vh';
import { wpx12 } from '../../constants/px.vw';
import useLanguage from '../../hooks/useLanguage';
import TransactionsView from '../transactions';

function BlocksPage() {
  const lang = useLanguage();
  const { blocks } = lang.languageText.titles;
  const classes = useStyles();
  const blocksInfo = BlocksInfoData;

  return (
    <CustomGrid md={12}>
      <VerticalFlex>
        <CustomGrid md={12}>
          <HorizontalFlex>
            <CustomGrid md={6}>
              <HorizontalFlex>
                <CustomGrid md={1.3}>
                  <Typography className={classes.title}>{blocks}</Typography>
                </CustomGrid>
                <CustomGrid md={10.5}>
                  <Typography className={classes.title}>3,456,789</Typography>
                </CustomGrid>
              </HorizontalFlex>
            </CustomGrid>
            <CustomGrid md={6}>
              <HorizontalFlex justifyContent="flex-end">
                <Typography className={classes.title}>{blocks}</Typography>
              </HorizontalFlex>
            </CustomGrid>
          </HorizontalFlex>
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
              <HorizontalFlex>
                {blocksInfo.map((data) => (
                  <CustomGrid md={3}>
                    <VerticalFlex>
                      <Typography className={classes.infoTitle}>
                        {data.title}
                      </Typography>
                      <Typography
                        style={{ color: `${data.color}` }}
                        className={classes.infoValue}
                      >
                        {data.value}
                      </Typography>
                    </VerticalFlex>
                  </CustomGrid>
                ))}
              </HorizontalFlex>
          </Paper>
        </CustomGrid>
        <CustomGrid>
          <TransactionsView />
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
    cursor: 'pointer',
  },
  infoCard: {
    height: `10vh`,
    backgroundColor: `rgba(39, 42, 44, 0.76)`,
    // opacity: 0.5,
    padding: '2vh 1.5vw 2vh 1.5vw',
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
    margin: `1vh 0px 0px 0px`,
  },
}));

export default BlocksPage;
