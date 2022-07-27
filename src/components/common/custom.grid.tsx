import { Grid } from "@mui/material";
import { memo } from "react";
import { GridComponentProps } from "../../types";

export interface LocalGridComponent extends GridComponentProps{
  styles?: any
}

function CustomGridItem(props: LocalGridComponent) {
  const {
    lg,
    md,
    xl,
    xs,
    children,
    container,
    alignItems,
    justifyContent,
    spacing,
    alignContent,
    direction,
    wrap,
    className,
    onClick,
    styles
  } = props;
  return (
    <Grid
      container={container}
      alignItems={alignItems}
      justifyContent={justifyContent}
      spacing={spacing}
      item
      xs={xs}
      md={md}
      lg={lg}
      xl={xl}
      className={className}
      alignContent={alignContent}
      direction={direction}
      wrap={wrap}
      onClick={onClick}
      style={styles}
    >
      {children}
    </Grid>
  );
}

export default memo(CustomGridItem);
