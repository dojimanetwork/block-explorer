import { Grid } from '@mui/material';
import { memo } from 'react';
import { GridComponentProps } from '../../types/index';

function VerticalFlex({
  children,
  alignItems,
  className,
  justifyContent,
  spacing,
  xl,
  xs,
  lg,
  md,
  alignContent,
  wrap,
}: GridComponentProps) {
  return (
    <Grid
      justifyContent={justifyContent}
      spacing={spacing}
      className={className}
      container
      direction="column"
      wrap={wrap}
      item
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

export default memo(VerticalFlex);
