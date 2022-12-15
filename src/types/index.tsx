import { ReactNode } from 'react';
import { GridSize, GridSpacing, GridWrap } from '@mui/material';

// Custom Grid Component Props
export declare type GridItemsAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';
export declare type GridContentAlignment =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';
export declare type GridDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';
export declare type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export interface GridComponentProps {
  xs?: boolean | GridSize;
  md?: boolean | GridSize;
  lg?: boolean | GridSize;
  xl?: boolean | GridSize;
  children?: ReactNode;
  className?: string;
  container?: boolean;
  justifyContent?: GridJustification | undefined;
  spacing?: GridSpacing;
  alignItems?: GridItemsAlignment;
  alignContent?: GridContentAlignment;
  direction?: GridDirection;
  wrap?: GridWrap;
  item?: boolean;
  GridStyles?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onScroll?: React.UIEventHandler<HTMLDivElement> | undefined;
}

export interface ChildrenType {
  children?: React.ReactNode;
}

export const BlockNumbers = [
  '234245',
  '223456',
  '62562564',
  // "polkadot",
  '265625',
];

export type MaintainanceError = "success" | "error"

export type SnackbarTypes = "success" | "error" | "warning" | "info";
