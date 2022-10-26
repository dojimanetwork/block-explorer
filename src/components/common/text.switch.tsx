import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  px10,
  px15,
  px20,
  px22,
  px28,
  px3,
  px6,
  px8,
  px80,
} from '../../constants/px.rem';

type CustomSwitchTypeProps = {
  state?: boolean;
  setState?: React.Dispatch<any>;
  handleChange?: () => void;
};

export default function TextSwitch(props: CustomSwitchTypeProps) {
  const classes = useStyles();
  const { state, handleChange } = props;

  return (
    <label className={classes.toggle}>
      <input
        checked={state}
        onChange={handleChange}
        className={classes.input}
        type="checkbox"
      />
      <span className={classes.slider}></span>
      <span
        className={classes.labels}
        data-on="Mainnet"
        data-off="Testnet"
      ></span>
    </label>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  toggle: {
    width: `${px80}`,
    height: `${px28}`,
    position: 'relative',
    display: 'inline-block',
    borderRadius: `${px15}`,
    cursor: 'pointer',
    boxShadow:
      '8px 8px 12px 0 rgba(0, 0, 0, 0.16), -6px -6px 12px 0 rgba(255, 255, 255, 0.04)',
    backgroundColor: '#393939',
    backgroundImage:
      'linear-gradient(to bottom, var(--black), var(--black)), linear-gradient(289deg, #171717 103%, #343434 -1%)',
    '& > input': {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      margin: '0px 20px 0px 220px  ',
    },
  },
  input: {
    '&:checked + span': {
      // borderColor: '#2196F3'
    },

    '&:checked + span:nth-of-type(1)::before': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      transform: 'translateX(51px)',
    },
    '&:checked ~ span:nth-of-type(2)::after': {
      opacity: 0,
    },
    '&:checked ~ span:nth-of-type(2)::before': {
      opacity: 1,
    },
  },
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: `${px15}`,
    border: '1px solid #393939',
    transition: 'all 0.4s ease-in-out',
    boxShadow: 'inset 0 4px 4px 0 rgba(35, 37, 38, 0.9)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '2.4px',
      left: `${px3}`,
      width: `${px22}`,
      height: `${px22}`,
      borderRadius: `${px20}`,
      backgroundColor: '#dbdbdb',
      transition: 'all 0.4s ease-in-out',
    },
  },
  labels: {
    position: 'absolute',
    top: `${px6}`,
    left: 0,
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: `${px10}`,
    fontFamily: 'Poppins',
    transition: 'all 0.4s ease-in-out',
    '&::after': {
      content: 'attr(data-off)',
      position: 'absolute',
      right: `${px10}`,
      opacity: 1,
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
      transition: 'all 0.4s ease-in-out',
    },
    '&::before': {
      content: 'attr(data-on)',
      position: 'absolute',
      left: `${px8}`,
      opacity: 0,
      textShadow: '1px 1px 2px rgba(255, 255, 255, 0.4)',
      transition: 'all 0.4s ease-in-out',
    },
  },
}));
