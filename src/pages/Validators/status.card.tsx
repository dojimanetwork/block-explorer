import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import VerticalFlex from "../../components/common/vertical.flex";
import { px10, px20, px8 } from "../../constants/px.rem";


interface BalanceProps {
    title?: string;
    value?: number | string;
    image?: string;
}

function StatusCard(props: BalanceProps) {
    const classes = useStyles({ ...props });
    const { image, title, value, } = props;

    return (
        <Paper className={classes.rectangleRoot}>
            <HorizontalFlex alignItems="center">
                <CustomGrid>
                    <img src={image} alt="name" className={classes.imageRoot} />
                </CustomGrid>
                <CustomGrid>
                    <VerticalFlex>
                        <Typography className={classes.title}>{title}</Typography>
                        <Typography className={classes.value}>{value}</Typography>
                    </VerticalFlex>
                </CustomGrid>
            </HorizontalFlex>

        </Paper>
    );
}

const useStyles = makeStyles<Theme, BalanceProps>((theme: Theme) => ({
    rectangleRoot: { 
        backgroundColor: "#171717",
        borderRadius: `${px8}`,
        padding: `${px10} ${px20} ${px10} ${px10}`,
        margin: "0px 18vh 0px 0px",
        opacity: "0.8",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
        },
        "@media (min-width: 1417px) and (max-width: 1532px)": {
            margin: "0px 15vh 0px 0px",
          },
          "@media (min-width: 1341px) and (max-width: 1416px)": {
            margin: "0px 13vh 0px 0px",
          },
          "@media (min-width: 1264px) and (max-width: 1341px)": {
            margin: "0px 11vh 0px 0px",
          },
          "@media (min-width: 1188px) and (max-width: 1264px)": {
            margin: "0px 9vh 0px 0px",
          },
          "@media (min-width: 1111px) and (max-width: 1188px)": {
            margin: "0px 7vh 0px 0px",
          },
          "@media (min-width: 1000px) and (max-width: 1111px)": {
            margin: "0px 4vh 0px 0px",
          },
          "@media (min-width: 700px) and (max-width: 1000px)": {
            margin: "0px 0vh 0px 0px",
          },
    },
    imageRoot: {
        width: "74px",
        height: "74px",
        flexGrow: "0",
        padding: "19px 16px",
        borderRadius: "8px",
       // backgroundImage: "radial-gradient(circle at 91% 10%, #f7931a, rgba(0, 0, 0, 0) 74%), linear-gradient(147deg, rgba(255, 255, 255, 0.4) -6%, rgba(255, 255, 255, 0.1) 108%)",
    },
    title: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "normal",
        letterSpacing: "-0.24px",
        margin: "0 0",
        fontFamily: "Poppins",
        // opacity: 0.8,


    },
    value: {
        lineHeight: "normal",
        letterSpacing: "-0.24px",
        color: "#fff",
        fontSize:"16px",
        fontWeight: 1000,
        margin: "5px 2px 0 0",
        fontFamily: "Poppins",

    },
}));

export default StatusCard;
