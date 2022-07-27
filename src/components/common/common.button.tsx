import { Theme } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { TitleClr } from "../../constants/colors";
import { px12 } from "../../constants/px.rem";
import { vpx16, vpx50 } from "../../constants/px.vh";

interface ButtonProps {
  width?: string;
  height?: string;
  bgColor?: string;
  text?: string;
  border?: string;
  textColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
  hoverBorder?: string;
  startIcon?: React.ReactNode;
  boxShadow?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function CommonButton(props: ButtonProps) {
  const { text, onClick, startIcon } = props;

  const classes = MuiStyles({ ...props });

  return (
    <Button
      className={classes.button}
      size="medium"
      onClick={onClick}
      startIcon={startIcon}
      variant="outlined"
    >
      {text}
    </Button>
  );
}

const MuiStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundImage: "linear-gradient(to left, #8552CF 100%,#B99BEC 0%);",
    "&.MuiButton-root": {
      width: "12vw",
      height: `${vpx50}`,
      border: `2px solid #B99BEC`,
      borderRadius: `${px12}`,
      color: `${TitleClr}`,
      overFlow: "flex-wrap",
      fontSize: `${vpx16}`,
      fontWeight: 500,
      fontFamily: 'Inter',
      cursor: 'pointer',
      zIndex: 1
    },
    [theme.breakpoints.down("sm")]:{
      "&.MuiButton-root": {
        width: "40vw",
        height: `${vpx50}`,
        border: `2px solid #B99BEC`,
        borderRadius: `${px12}`,
        color: `${TitleClr}`,
        overFlow: "flex-wrap",
        fontSize: `${vpx16}`,
        fontWeight: 500,
        fontFamily: 'Inter',
      },
    }
  },
}));

export default CommonButton;
