import { SvgIconTypeMap, Theme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { memo } from 'react';
import { TitleClr } from '../../constants/colors';
import { vpx16, vpx30 } from '../../constants/px.vh';
import { wpx30 } from '../../constants/px.vw';
import HorizontalFlex from './horizontal.flex';

type IconLinkProps = {
  link: string;
  text?: any;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  target?: React.HTMLAttributeAnchorTarget;
  isActive: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => void;
  index: number;
};

function IconTextLink(props: IconLinkProps) {
  const { link, Icon, target, text, isActive, onClick, index } = props;
  const classes = useStyles({ ...props });

  return (
    <div className={classes.root}>
      <HorizontalFlex>
        {/* Underline code on hover. */}
        <div
          className={clsx(
            classes.Underline,
            isActive ? classes.ActiveLink : null
          )}
        />
        <a
          href={link}
          target={target ?? '_self'}
          className={classes.Link}
          onClick={(e) => onClick?.(e, index)}
        >
          {Icon && <Icon color={isActive ? 'primary' : 'inherit'} />}
          {/* <Typography variant="subtitle2" className={classes.textRoot}>
            {text}
          </Typography> */}
          <img src={text} alt="dashboard" className={classes.imageRoot} />
        </a>
      </HorizontalFlex>
    </div>
  );
}

export default memo(IconTextLink);

const useStyles = makeStyles<Theme, IconLinkProps>((theme: Theme) => ({
  root: {
    // marginInline: '2rem',
    display: 'inline-block',
    cursor: 'pointer',
  },
  Link: {
    textDecoration: 'none',
    color: ({ isActive }) =>
      isActive ? theme.palette.common.white : theme.palette.grey[500],
    '&:visited + div': {
      backgroundColor: theme.palette.primary.light,
      width: '100%',
    },
    '&:hover': {
      color: theme.palette.common.white,
    },
    '&:active': {
      transition: 'none',
      color: theme.palette.primary.light,
    },
  },
  Underline: {
    height: '24px',
    backgroundColor: 'transparent',
    width: '3px',
    transition: 'width 0.2s, background-color 0.5s',
  },
  ActiveLink: {
    backgroundColor: theme.palette.common.white,
    // width: "100%",
    margin: '0px 0.2vw 0px 0px',
    backgroundImage: 'linear-gradient(93deg, #f81 -40%, #ff1267 214%)',
    borderRadius: '2px',
    boxShadow: '10px 0px 10px #0081ff',
  },
  textRoot: {
    color: `${TitleClr}`,
    fontFamily: 'Inter',
    fontSize: `${vpx16}`,
    fontWeight: 500,
  },
  activeTextColor: {
    color: theme.palette.common.white,
  },
  inActiveTextColor: {
    color: theme.palette.grey[500],
  },
  imageRoot: {
    margin: `0px 0px 4vh 0px`,
    height: `${vpx30}`,
    width: `${wpx30}`,
    cursor: 'pointer',
  },
}));
