import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import VerticalFlex from '../../components/common/vertical.flex';
import { vpx14, vpx17 } from '../../constants/px.vh';
import { wpx48 } from '../../constants/px.vw';

interface BalanceProps {
  title?: string;
  value?: number | string;
  image?: string;
}

function StatusCard(props: BalanceProps) {
  const classes = useStyles({ ...props });
  const { image, title, value } = props;

  return (
    <CustomGrid className={classes.root} md={2.4}>
      <HorizontalFlex alignItems="center">
        <CustomGrid>
          <img src={image} alt="name" className={classes.imageRoot} />
        </CustomGrid>
        <CustomGrid>
          <VerticalFlex>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.value}>{value}</Typography>
          </VerticalFlex>
        </CustomGrid>
      </HorizontalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles<Theme, BalanceProps>((theme: Theme) => ({
  root: {
    margin: `2vh 0px 0px 0px`,
  },
  imageRoot: {
    width: `${wpx48}`,
    margin: `0px 0.5vw 0px 0px`,
  },
  title: {
    color: '#fff',
    fontSize: `${vpx14}`,
    fontWeight: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.24px',
    opacity: 0.7,
  },
  value: {
    lineHeight: 'normal',
    letterSpacing: '-0.32px',
    color: '#fff',
    fontSize: `${vpx17}`,
    fontWeight: '500',
  },
}));

export default StatusCard;
