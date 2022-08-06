import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import VerticalFlex from "../../components/common/vertical.flex";
import { DailyStatusData } from "../../components/constants/daily.status.data";
import { vpx10, vpx18 } from "../../constants/px.vh";

function DailyStatus() {
  const classes = useStyles();
  const dailyStatusData = DailyStatusData;
  return (
    <CustomGrid md={12}>
      <Paper className={classes.paperRoot}>
        <VerticalFlex>
          {dailyStatusData.map((data, index: number) => (
            <CustomGrid md={12} key={`${data},${index}`}>
              <Typography
                className={classes.title}
                style={{ opacity: data.titleOpacity }}
              >
                {data.title}
              </Typography>
              <Typography
                className={classes.value}
                style={{ opacity: data.valueOpacity, color: data.valueClr }}
              >
                {data.value}
              </Typography>
              <CustomGrid className={classes.dividerRoot}>
                <div className={classes.horizontalDivider}></div>
              </CustomGrid>
            </CustomGrid>
          ))}
        </VerticalFlex>
      </Paper>
    </CustomGrid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  paperRoot: {
    height: `40vh`,
    width: `12vw`,
    backgroundColor: "transparent",
    // boxShadow: "10px 15px 10px 0 rgba(0, 0, 0, 0.2)",
    backgroundImage: `radial-gradient(140% 70% at 100% 0%,#264da3 -40%, rgba(0, 0, 0, 0) 70%) ,linear-gradient(359deg, rgba(255, 255, 255, 0.16) -120%, rgba(255, 255, 255, 0.04) 97.48%)`,
    padding: `2vh 1.2vw 2vh 1.2vw`,
    border: "0.5px solid rgba(255, 255, 255, 0.4)",
    margin: `0px 0px 1.5vh 0px`,
    opacity: 0.9,
  },
  title: {
    color: theme.palette.common.white,
    fontSize: `${vpx18}`,
    fontWeight: "normal",
    letterSpacing: "-0.36px",
  },
  value: {
    fontSize: `${vpx10}`,
    fontWeight: '300',
    letterSpacing: "-0.28px",
  },
  dividerRoot: {
    margin: `2vh 0px 2.5vh 0px`,
  },
  horizontalDivider: {
    height: "0.6px",
    backgroundImage:
      "linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0.42) 100%)",
    opacity: 0.2,
  },
}));

export default DailyStatus;
