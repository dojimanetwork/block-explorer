import { Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomGrid from "./custom.grid";
import HorizontalFlex from "./horizontal.flex";
import VerticalFlex from "./vertical.flex";
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
        <CustomGrid className={classes.rectangleRoot} md={2.3}>
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
        </CustomGrid>
    );
}

const useStyles = makeStyles<Theme, BalanceProps>((theme: Theme) => ({
    rectangleRoot: { 
        backgroundColor: "#171717",
        borderRadius: `${px8}`,
        padding: `${px10} ${px20} ${px10} ${px10}`,
        margin: "0px 0px 0px 0px",
        opacity: "0.8",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
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
        fontWeight: "normal",
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
        fontWeight: 600,
        margin: "5px 2px 0 0",
    },
}));

export default StatusCard;
