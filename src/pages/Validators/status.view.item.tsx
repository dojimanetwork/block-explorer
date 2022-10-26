import { makeStyles } from '@mui/styles';
import CustomGrid from '../../components/common/custom.grid';
import HorizontalFlex from '../../components/common/horizontal.flex';
import { vpx20 } from '../../constants/px.vh';
import StatusCard from './status.card';
import AllImg from '../../static/validators/all.svg';
import Suspendedimg from '../../static/validators/suspended.svg';
import DisabledImg from '../../static/validators/disable.svg';
import StandbyImg from '../../static/validators/standby.svg';
import ActiveImg from '../../static/validators/active.svg';

function StatusItemView() {
  const classes = useStyles();

  return (
    <CustomGrid className={classes.root} xs={12}>
      <HorizontalFlex>
        <StatusCard image={AllImg} title="All" value="21372" />
        <StatusCard image={ActiveImg} title="Active" value="21372" />
        <StatusCard image={StandbyImg} title="Standby" value="21372" />
        <StatusCard image={Suspendedimg} title="Suspended" value="21372" />
        <StatusCard image={DisabledImg} title="Disabled" value="21372" />
      </HorizontalFlex>
    </CustomGrid>
  );
}

const useStyles = makeStyles({
  root: {
    margin: `0px 0px ${vpx20} 0px`,
  },
});

export default StatusItemView;
