import { Theme } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@mui/styles';
import { OrangeClr } from '../../constants/colors';
import { px6 } from '../../constants/px.rem';
import { vpx14 } from '../../constants/px.vh';

function PoolsSelectButtons() {
    const classes = useStyles();

  return (
    <ButtonGroup>
      <Button className={classes.button}>Transaction</Button>
      <Button className={classes.button}>Provider</Button>
      <Button className={classes.button}>Vault</Button>
    </ButtonGroup>
  );
}

const useStyles = makeStyles((theme: Theme) =>({
    button:{
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
        '&:active':{
            backgroundColor: OrangeClr,
            opacity: 1
        },
    }
}))

export default PoolsSelectButtons