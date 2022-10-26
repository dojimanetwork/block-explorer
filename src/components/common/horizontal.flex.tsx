import { Grid } from '@mui/material';
import { memo } from 'react';
import { GridComponentProps } from '../../types/index';

function HorizontalFlex({
  children,
  className,
  spacing,
  alignItems,
  lg,
  md,
  xl,
  xs,
  alignContent,
  justifyContent,
  wrap,
}: GridComponentProps) {
  return (
    <Grid
      container
      item
      justifyContent={justifyContent}
      direction="row"
      wrap={wrap ?? 'wrap'}
      spacing={spacing}
      className={className}
      alignItems={alignItems}
      xs={xs ?? 12}
      md={md ?? false}
      lg={lg ?? false}
      xl={xl ?? false}
      alignContent={alignContent}
    >
      {children}
    </Grid>
  );
}
export default memo(HorizontalFlex);
