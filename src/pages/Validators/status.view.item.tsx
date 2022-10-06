import { makeStyles } from "@mui/styles";
import CustomGrid from "../../components/common/custom.grid";
import HorizontalFlex from "../../components/common/horizontal.flex";
import { vpx20 } from "../../constants/px.vh";
import StatusCard from "./status.card";

function StatusItemView() {
    const classes = useStyles();

    return (
        <CustomGrid className={classes.root} xs={12}>
            <HorizontalFlex>
                <StatusCard
                    image={
                        "https://dojima-images.s3.ap-south-1.amazonaws.com/dashboard/assets/transactions/blocks.svg"
                    }
                    title="All"
                    value="21372"
                />
                <StatusCard
                    image={
                        "https://dojima-images.s3.ap-south-1.amazonaws.com/dashboard/assets/transactions/transactions.svg"
                    }
                    title="Active"
                    value="21372"
                />
                <StatusCard
                    image={
                        "https://dojima-images.s3.ap-south-1.amazonaws.com/dashboard/assets/transactions/output.svg"
                    }
                    title="Standby"
                    value="21372"
                />
                <StatusCard
                    image={
                        "https://dojima-images.s3.ap-south-1.amazonaws.com/dashboard/assets/transactions/addresses.svg"
                    }
                    title="Suspended"
                    value="21372"
                />
                <StatusCard
                    image={
                        "https://dojima-images.s3.ap-south-1.amazonaws.com/dashboard/assets/transactions/addresses.svg"
                    }
                    title="Disabled"
                    value="21372"
                />
            </HorizontalFlex>
        </CustomGrid>
    );
}

const useStyles = makeStyles({
    root: {
        margin: `0px 0px ${vpx20} 0px`,
    },
});

export default StatusItemView;
