import { Theme } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { TitleClr } from '../../constants/colors';
import { px12, px18 } from '../../constants/px.rem';
import { vpx100, vpx48 } from '../../constants/px.vh';

export interface OutlinedButtonProps {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function OutlinedButton(props: OutlinedButtonProps) {
  const classes = useStyles({ ...props });
  const { text, onClick } = props;
  return (
    <Button onClick={onClick} className={classes.button} variant="outlined">
      {text}
    </Button>
  );
}

const useStyles = makeStyles<Theme, OutlinedButtonProps>((theme: Theme) => ({
  button: {
    height: `${vpx48}`,
    width: `14vw`,
    borderRadius: `${px12}`,
    border: `1px solid ${TitleClr}`,
    backgroundColor: '#080000',
    color: TitleClr,
    fontSize: `${px18}`,
    margin: `${vpx100} 0px 0px 0px`,
    fontFamily: 'Inter',
    fontWeight: 500,
    '&:hover': {
      border: `1px solid ${TitleClr}`,
      backgroundColor: '#080000',
    },
  },
}));

export default OutlinedButton;
