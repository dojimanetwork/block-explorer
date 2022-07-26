import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import VerticalFlex from '../../components/common/vertical.flex';
import { LightBlueClr, OrangeClr } from '../../constants/colors';
import { vpx12, vpx15, vpx18, vpx20, vpx8 } from '../../constants/px.vh';
import { wpx15 } from '../../constants/px.vw';
import useLanguage from '../../hooks/useLanguage';

function TxSetIpAddress() {
  const classes = useStyles();
  const lang = useLanguage();
  const { title1, title2, title3, title4 } =
    lang.languageText.transaction.tx_bond;

  return (
    <CustomGrid className={classes.root} md={11.5}>
      <VerticalFlex>
        <Paper className={classes.paperRoot}>
          <VerticalFlex>
            <CustomGrid md={12}>
              <Typography className={classes.title}>
                Transaction Details
              </Typography>
              <CustomGrid md={1.5}>
                <div className={classes.horizontalDivider}></div>
              </CustomGrid>
            </CustomGrid>
            <CustomGrid md={12} className={classes.headerRoot}>
              <VerticalFlex>
                <CustomGrid md={12}>
                  <HorizontalFlex>
                    <CustomGrid md={2} className={classes.valueRoot}>
                      <Typography className={classes.valueTitle}>
                        {title1}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <HorizontalFlex alignItems="center">
                        <Typography className={classes.value}>
                          8E445613CDFDF364F29F59B21DEE71DA1CEAFE231F7C8F4F722090FF89B16E2E
                        </Typography>
                        <ContentCopyIcon className={classes.copyIcon} />
                      </HorizontalFlex>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title2}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography className={classes.value}>
                        #2837103
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title3}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <HorizontalFlex>
                        <Paper
                          className={classes.valuePaper}
                          style={{ backgroundColor: LightBlueClr }}
                        >
                          <Typography className={classes.valuePaperTxt}>
                            setIpaddress
                          </Typography>
                        </Paper>
                      </HorizontalFlex>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        Signer
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography
                        className={classes.value}
                        style={{ color: OrangeClr }}
                      >
                        Doj3Rei02...h073r
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        IP Address
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography
                        className={classes.value}
                        style={{ color: OrangeClr }}
                      >
                        34.172.228.124
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
                <CustomGrid md={12} className={classes.valueRoot}>
                  <HorizontalFlex>
                    <CustomGrid md={2}>
                      <Typography className={classes.valueTitle}>
                        {title4}
                      </Typography>
                    </CustomGrid>
                    <CustomGrid md={0.5}>
                      <Typography className={classes.dots}>:</Typography>
                    </CustomGrid>
                    <CustomGrid md={9.5}>
                      <Typography className={classes.value}>
                        36 minutes ago (July 12, 2022 09:13:49 PM)
                      </Typography>
                    </CustomGrid>
                  </HorizontalFlex>
                </CustomGrid>
              </VerticalFlex>
            </CustomGrid>
          </VerticalFlex>
        </Paper>
      </VerticalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '4vh 0px 0px 0px',
  },
  paperRoot: {
    height: `38.656527249683144vh`,
    backgroundColor: 'transparent',
    // boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    // backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -80%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `3.2vh 1.5vw 3.5vh 1.5vw`,
    border: '0.5px solid rgba(255, 255, 255, 0.4)',
    opacity: 0.9,
    borderRadius: '8px',
  },
  memosPaper: {
    height: `13vh`,
    backgroundColor: 'transparent',
    // boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    // backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -80%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `3.2vh 1.5vw 13.5vh 1.5vw`,
    border: '0.5px solid rgba(255, 255, 255, 0.4)',
    opacity: 0.9,
    margin: `2.5vh 0px 2.5vh 0px`,
    borderRadius: '8px',
  },
  title: {
    color: theme.palette.common.white,
    fontSize: `${vpx20}`,
    fontWeight: 'normal',
    letterSpacing: '-0.36px',
    opacity: 0.6,
  },
  horizontalDivider: {
    height: '0.6px',
    backgroundImage:
      'linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0.42) 100%)',
    opacity: 0.2,
  },
  headerRoot: {
    margin: `2.4vh 0px 0px 0px`,
  },
  valueRoot: {
    margin: `0px 0px 1.7vh 0px`,
  },
  valueTitle: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: 'normal',
    letterSpacing: '-0.36px',
    opacity: 0.7,
    width: `10vw`,
  },
  dots: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    opacity: 0.7,
  },
  value: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: 'normal',
    letterSpacing: '-0.36px',
  },
  copyIcon: {
    fontSize: `${vpx12}`,
    color: OrangeClr,
    margin: `0px 0px 0px 0.5vw`,
    opacity: 0.8,
  },
  arrowIcon: {
    fontSize: `${vpx18}`,
    color: theme.palette.common.white,
    margin: `0px 1vw 0px 1vw`,
    opacity: 0.8,
  },
  valuePaper: {
    height: `1.8vh`,
    width: `fit-content`,
    padding: `0.1vh 0.5vw 0.1vh 0.5vw`,
    borderRadius: '2px',
    margin: `0px 0.5vw 0px 0px`,
  },
  valuePaperTxt: {
    color: theme.palette.common.white,
    fontSize: `${vpx8}`,
  },
  chainLogo: {
    height: `${vpx15}`,
    width: `${wpx15}`,
    margin: `0px 0.3vw 0px 0px`,
  },
  memosTxt: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: 'normal',
    letterSpacing: '-0.36px',
    margin: `2vh 0px 0px 0px`,
  },
  outTxt: {
    color: theme.palette.common.white,
    fontSize: `${vpx15}`,
    fontWeight: 'normal',
    letterSpacing: '-0.36px',
    margin: `0px 0px 0px 0px`,
  },
}));

export default TxSetIpAddress;
