import * as React from 'react';
import GridListComponent from '@material-ui/core/GridList';
import GridListTileComponent from '@material-ui/core/GridListTile';
import GridListTileBarComponent from '@material-ui/core/GridListTileBar';

export interface GridListProps {


    /**
     * @name Cell Height
     * @description Number of px for one cell height. You can set 'auto' if you want to let the children determine the height.
     * @group Grid List
     * */
    cellHeight?: number;

    /**
     * @name Columns
     * @group Grid List
     * */
    cols?: number;

    /**
     * @name Spacing
     * @description Px for spacing between tiles.
     * @group Grid List
     * */
    spacing?: number;
}

export interface GridListTileProps {

    /**
     * @name Width
     * @description In number of grid cells.
     * @group  Grid List Tile
     * @default 1
     * */
    cols?: number;

    /**
     * @name Height
     * @description In number of grid cells.
     * @group  Grid List Tile
     * @default 1
     * */
    rows?: number;
}

export interface GridListTileBarProps {

    /**
     * @name Action Position
     * @description Position of secondary action
     * @group Tile Bar
     * */
    actionPosition?: GridListTileBarActionPosition;

    /**
     * @name Title Position
     * @control ButtonGroup
     * @group Tile Bar
     * */
    titlePosition?: GridListTileBarTitlePosition;

    /** @name Action Icon */
    actionIcon?: React.ReactNode;

    /** @name Title */
    title?: React.ReactNode;

    /** @name Subtitle */
    subtitle?: React.ReactNode;
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
 * @name Grid List
 * @group Grid List
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
 * @group Grid List
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
 * @group Grid List
 */
export const GridListTileBar: React.SFC<GridListTileBarProps> = props => {
    return (
        <GridListTileBarComponent {...props}>
            {props.children}
        </GridListTileBarComponent>
    )
}
