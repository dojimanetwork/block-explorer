import { memo } from "react";
import React from "react";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import { createStyles, withStyles, WithStyles } from "@mui/styles";
import MuiDialogTitle from "@mui/material/DialogTitle";
import { IconButton, Theme } from "@mui/material";
import { px20 } from "../../constants/px.rem";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      borderRadius: `${px20}`,
      zIndex: 1,
      backgroundColor: "#080000",
      height: "90vh",
      width: "80vw",
      [theme.breakpoints.down("sm")]: {
        height: "80vh",
        width: "95vw",
      },
    },
  })
);

export interface CustomDialogProps {
  title?: string;
  open: boolean;
  onClose?: () => void;
  component: React.ReactElement;
}

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(0),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      color: theme.palette.primary.main,
    },
  });

const DialogTitle = memo(
  withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle className={classes.root} {...other}>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  })
);

function DojimaDialog(props: CustomDialogProps) {
  const classes = useStyles();
  const { onClose, open, component, title } = props;

  return (
    <Dialog
      classes={{ paper: classes.root }}
      aria-labelledby={title}
      open={open}
      onBackdropClick={onClose}
    >
      <DialogTitle id="customized-dialog-title" onClose={() => onClose?.()}>
        {title}
      </DialogTitle>
      {component}
    </Dialog>
  );
}

export default memo(DojimaDialog);
