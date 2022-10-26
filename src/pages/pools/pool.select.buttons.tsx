import { Theme } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@mui/styles';
import { OrangeClr } from '../../constants/colors';
import { px6 } from '../../constants/px.rem';
import { vpx14 } from '../../constants/px.vh';

interface PoolsButtonIfc {
  txt1?: string;
  txt2?: string;
  txt3?: string;
}

function PoolsSelectButtons(props: PoolsButtonIfc) {
  const classes = useStyles();
  const { txt1, txt2, txt3 } = props;

  return (
    <ButtonGroup>
      <Button className={classes.button}>{txt1}</Button>
      <Button className={classes.button}>{txt2}</Button>
      <Button className={classes.button}>{txt3}</Button>
    </ButtonGroup>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: `8vw`,
    height: `4vh`,
    backgroundColor: 'rgba(80, 80, 80, 0.15)',
    color: theme.palette.common.white,
    fontSize: `${vpx14}`,
    fontWeight: `normal`,
    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.04)',
    borderRight: '1px solid rgba(255, 255, 255, 0.04)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
    borderRadius: `${px6}`,
    opacity: 0.4,
    margin: `0px 0px 2vh 0px`,
    '&:active': {
      backgroundColor: OrangeClr,
      opacity: 1,
    },
  },
}));

export default PoolsSelectButtons;
