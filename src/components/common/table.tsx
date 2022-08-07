import { Theme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import { px5, px10, px3 } from "../../constants/px.rem";

export type row = any;

interface TableProps {
    headers: Array<string>;
    rows: Array<row>;
    tableHeight?: string;
    tableWidth?: string;
    border?: string;
    onClick?: React.MouseEventHandler<HTMLTableCellElement> | undefined;
    rowOnClick?: (rw: row, index: number) => void;
}

function CustomTable(props: TableProps) {
    const { headers, rows, rowOnClick } = props;
    const classes = useStyles({ ...props });

    const TableHeaders = headers.map((header: string, outerIndex: number) => (
        <StyledTableCell key={`${header},${outerIndex}`} align="center">
            {header}
        </StyledTableCell>
    ));

    const TableRows = rows.map((rw: row, outerIndex: number) => (
        <StyledTableRow key={`${headers[outerIndex]},${outerIndex}`}>
            {Object.keys(rw)
                .sort()
                .map((key, innerIndex) => {
                    return (
                        <StyledTableCell
                            key={`${innerIndex}`}
                            // onClick={() => rowOnClick?.(rw, outerIndex)}
                            align="center"
                            scope="row"
                        >
                            {/* @ts-ignore */}
                            {rw[`${key}`]}
                        </StyledTableCell>
                    );
                })}
        </StyledTableRow>
    ));

    return (
        <TableContainer className={classes.Paper} component={Paper}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow> <TableCell className={classes.th}>Email</TableCell>
                        <TableCell className={classes.th}>Name</TableCell>
                        <TableCell className={classes.th}>Reason</TableCell>
                        <TableCell className={classes.th}>Start Date</TableCell>
                        <TableCell className={classes.th}>End Date</TableCell>
                        <TableCell className={classes.th}>Approve / Reject</TableCell></TableRow>
                </TableHead>
                <TableBody>
                    <TableRow> <TableCell className={classes.tb}>Email</TableCell>
                        <TableCell className={classes.tb}>Name</TableCell>
                        <TableCell className={classes.tb}>Reason</TableCell>
                        <TableCell className={classes.tb}>Start Date</TableCell>
                        <TableCell className={classes.tb}>End Date</TableCell>
                        <TableCell className={classes.tb}>Approve / Reject</TableCell>
                    </TableRow></TableBody>
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles<Theme, TableProps>((theme: Theme) => ({
    Paper: {
        border: ({ border }) => border,
        borderRadius: "8px",
        maxHeight: ({ tableHeight }) => tableHeight,
        maxWidth: ({ tableWidth }) => tableWidth,
        "&::-webkit-scrollbar-track": {
            border: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[800],
        },
        "&::-webkit-scrollbar": {
            width: `${px3}`,
            height: `${px3}`,
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundImage: "linear-gradient(171deg, #f81 -21%, #ff1267 149%)",
            borderRadius: `${px10}`,
            maxHeight: `${px5}`,
        },
        // [theme.breakpoints.down('sm')]: {
        //  maxWidth:"96%",
        // },
    },
    
    th:{
        backgroundColor: "#04153b",
        color: theme.palette.grey[200],
        borderBottom: `1px solid ${theme.palette.grey[700]}`,
        overflow: "scroll",
        [theme.breakpoints.down("sm")]: {
            fontSize: 12,
            padding: "12px",
            "@media (min-width: 355px) and (max-width: 380px)": {
                padding: "8px",
            },
        },
        "&::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
        }, 
    },
    tb:{
        fontSize: 14,
        backgroundColor: "#171717",
        color: theme.palette.grey[500],
        borderBottom: `1px solid ${theme.palette.grey[800]}`,
        cursor: "pointer",
        "&:active": {
            backgroundColor: theme.palette.grey[600],
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 11,
            padding: "8px",
            "@media (min-width: 355px) and (max-width: 380px)": {
                fontSize: "9px",
                padding: "8px",
            },
        },  
    },

}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#04153b",
        color: theme.palette.grey[200],
        borderBottom: `1px solid ${theme.palette.grey[700]}`,
        overflow: "scroll",
        [theme.breakpoints.down("sm")]: {
            fontSize: 12,
            padding: "12px",
            "@media (min-width: 355px) and (max-width: 380px)": {
                padding: "8px",
            },
        },
        "&::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
        },
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: "#04153b",
        color: theme.palette.grey[500],
        borderBottom: `1px solid ${theme.palette.grey[800]}`,
        cursor: "pointer",
        "&:active": {
            backgroundColor: theme.palette.grey[600],
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 11,
            padding: "8px",
            "@media (min-width: 355px) and (max-width: 380px)": {
                fontSize: "9px",
                padding: "8px",
            },
        },
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        // border: 0,
    },
}));

export default CustomTable;
