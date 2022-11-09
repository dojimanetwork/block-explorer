import {
  Alert,
  Snackbar,
  SnackbarCloseReason,
  SnackbarOrigin,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export type Color = "success" | "info" | "warning" | "error";

export interface CustomSnackBarProps {
  open?: boolean | undefined;
  onClose?:
    | ((
        event: Event | React.SyntheticEvent<any, Event>,
        reason: SnackbarCloseReason
      ) => void)
    | undefined;
  keyId?: any;
  vertical?: SnackbarOrigin["vertical"];
  horizontal?: SnackbarOrigin["horizontal"];
  message?: string | undefined;
  autoHideDuration?: number;
  variant?: "standard" | "filled" | "outlined";
  handleClose?:
    | ((event: React.SyntheticEvent<Element, Event>) => void)
    | undefined;
  severity?: Color;
}

function CustomSnackBar(props: CustomSnackBarProps) {
  const {
    open,
    onClose,
    keyId,
    vertical,
    horizontal,
    message,
    autoHideDuration,
    variant,
    handleClose,
    severity,
  } = props;
  const classes = useStyles();

  return (
    <Snackbar
      key={keyId}
      open={open}
      autoHideDuration={autoHideDuration ?? 5000}
      onClose={onClose}
      anchorOrigin={{
        vertical: vertical ?? "bottom",
        horizontal: horizontal ?? "left",
      }}
    >
      <Alert
        variant={variant ?? "filled"}
        onClose={handleClose}
        severity={severity ?? "success"}
        // sx={{ width: "100%" }}
        className={classes.root}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: `50vw`,
    },
  },
}));

export default CustomSnackBar;
