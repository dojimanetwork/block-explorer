import { SvgIconTypeMap, Theme, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { makeStyles } from '@mui/styles';
import { memo } from 'react';
import VerticalFlex from '../../components/common/vertical.flex';
import { TitleClr } from '../../constants/colors';
import { vpx16 } from '../../constants/px.vh';

type IconLinkProps = {
  link: string;
  text: string;
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
      <VerticalFlex>
        <a
          href={link}
          target={target ?? '_self'}
          className={classes.Link}
          onClick={(e) => onClick?.(e, index)}
        >
          {Icon && <Icon color={isActive ? 'primary' : 'inherit'} />}
          <Typography variant="subtitle2" className={classes.textRoot}>
            {text}
          </Typography>
        </a>
        {/* Underline code on hover. */}
        {/* <div
          className={clsx(
            classes.Underline,
            isActive ? classes.ActiveLink : null
          )}
        /> */}
      </VerticalFlex>
    </div>
  );
}

export default memo(IconTextLink);

const useStyles = makeStyles<Theme, IconLinkProps>((theme: Theme) => ({
  root: {
    marginInline: '2rem',
    display: 'inline-block',
    cursor: 'pointer'
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
    height: '3px',
    backgroundColor: 'transparent',
    width: '0%',
    transition: 'width 0.2s, background-color 0.5s',
  },
  ActiveLink: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    margin: '0px 0px 0px 0px',
    backgroundImage: 'linear-gradient(93deg, #f81 -40%, #ff1267 214%)',
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
  },
  textRoot: {
    color: `${TitleClr}`,
    fontFamily: "Inter",
    fontSize: `${vpx16}`,
    fontWeight: 500,

  },
  activeTextColor: {
    color: theme.palette.common.white,
  },
  inActiveTextColor: {
    color: theme.palette.grey[500],
  },
}));
