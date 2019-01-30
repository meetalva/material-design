import * as React from 'react';
import GridComponent from '@material-ui/core/Grid';
import GridListComponent from '@material-ui/core/GridList';
import GridListTileComponent from '@material-ui/core/GridListTile';
import GridListTileBarComponent from '@material-ui/core/GridListTileBar';

export interface GridProps {
    /** @name Align Content */
    alignContent?: GridContentAlignment;

    /** @name Align Items */
    alignItems?: GridItemsAlignment;

    /** @name Container */
    container?: boolean;

    /** @name Direction */
    direction?: GridDirection;

    /** @name Item */
    item?: boolean;

    /** @name Justification */
    justify?: GridJustification;

    /** @name Spacing */
    spacing?: GridSpacing;

    /** @name Wrap */
    wrap?: GridWrap;

    /** @name Zero Min Width */
    zeroMinWidth?: boolean;
}

export interface GridListProps {
    /** @name Cell Height */
    cellHeight?: number;

    /** @name Cols */
    cols?: number;

    /** @name Spacing */
    spacing?: number;
}

export interface GridListTileProps {
    /** @name Cols */
    cols?: number;

    /** @name Rows */
    rows?: number;
}

export interface GridListTileBarProps {
    /** @name Action Icon */
    actionIcon?: React.ReactNode;

    /** @name Action Position */
    actionPosition?: GridListTileBarActionPosition;

    /** @name Subtitle */
    subtitle?: React.ReactNode;

    /** @name Title */
    title?: React.ReactNode;

    /** @name Title Position */
    titlePosition?: GridListTileBarTitlePosition;
}

export enum GridJustification {
    FlexStart = 'flex-start',
    Center = 'center',
    FlexEnd = 'flex-end',
    Spacebetween = 'space-between',
    SpaceAround = 'space-around',
    SpaceEvenly = 'space-evenly'
}

export enum GridContentAlignment {
    Stretch = 'stretch',
    Center = 'center',
    FlexStart = 'flex-start',
    FlexEnd = 'flex-end',
    Spacebetween = 'space-between',
    SpaceAround = 'space-around'
}

export enum GridItemsAlignment {
    FlexStart = 'flex-start',
    Center = 'center',
    FlexEnd = 'flex-end',
    Stretch = 'stretch',
    Baseline = 'baseline'
}

export enum GridDirection {
    Row = 'row',
    RowReverse = 'row-reverse',
    Column = 'column',
    ColumnReverse = 'column-reverse'
}

export enum GridWrap {
    NoWrap = 'nowrap',
    Wrap = 'wrap',
    WrapReverse = 'wrap-reverse'
}

export enum GridSize {
    Size1 = 1,
    Size2 = 2,
    Size3 = 3,
    Size4 = 4,
    Size5 = 5,
    Size6 = 6,
    Size7 = 7,
    Size8 = 8,
    Size9 = 9,
    Size10 = 10,
    Size11 = 11,
    Size12 = 12
}

export enum GridSpacing {
    Spacing0 = 0,
    Spacing8 = 8,
    Spacing16 = 16,
    Spacing24 = 24,
    Spacing32 = 32,
    Spacing40 = 40
}

export enum GridListTileBarActionPosition {
    Left = 'left',
    Right = 'right'
}

export enum GridListTileBarTitlePosition  {
    Top = 'top',
    Bottom = 'bottom'
}

/**
 * @name Grid
 * @group Grid
 */
export const Grid: React.SFC<GridProps> = props => {
    return (
        <GridComponent {...props}>
            {props.children}
        </GridComponent>
    )
}

/**
 * @name Grid List
 * @group Grid
 */
export const GridList: React.SFC<GridListProps> = props => {
    return (
        <GridListComponent {...props}>
            {props.children}
        </GridListComponent>
    )
}

/**
 * @name Grid List Tile
 * @group Grid
 */
export const GridListTile: React.SFC<GridListTileProps> = props => {
    return (
        <GridListTileComponent {...props}>
            {props.children}
        </GridListTileComponent>
    )
}

/**
 * @name Grid List Tile Bar
 * @group Grid
 */
export const GridListTileBar: React.SFC<GridListTileBarProps> = props => {
    return (
        <GridListTileBarComponent {...props}>
            {props.children}
        </GridListTileBarComponent>
    )
}
