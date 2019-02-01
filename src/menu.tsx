import * as React from 'react';
import MenuComponent from '@material-ui/core/Menu';
import MenuItemComponent from '@material-ui/core/MenuItem';
import MenuListComponent from '@material-ui/core/MenuList';
import { PopoverProps } from './popover';
import { ListItemProps, ListProps } from './list';
import { StandardProps } from './types';
import { PaperProps } from './paper';

export interface MenuProps extends StandardProps<PopoverProps>  {
    /** @name Disable Auto Focus Item */
    disableAutoFocusItem?: boolean;

    /** @name Menu List Props */
    MenuListProps?: Partial<MenuListProps>;

    /** @name Paper Props */
    PaperProps?: Partial<PaperProps>;
}

export interface MenuItemProps extends StandardProps<ListItemProps> {
    role?: string;
}

export interface MenuListProps extends StandardProps<ListProps> {
    /** @name Disable List Wrap */
    disableListWrap?: boolean;

    /** @name On Key Down */
    onKeyDown?: React.ReactEventHandler<React.KeyboardEvent<any>>;
}

/**
 * @name Menu
 * @description Display a list of choices on temporary surfaces
 * @icon Menu
 * @group Menu
 */
export const Menu: React.SFC<MenuProps> = props => {
    return (
        <MenuComponent {...props}>
            {props.children}
        </MenuComponent>
    )
}

/**
 * @name Menu Item
 * @icon Minus
 * @group Menu
 */
export const MenuItem: React.SFC<MenuItemProps> = props => {
    return (
        <MenuItemComponent {...props}>
            {props.children}
        </MenuItemComponent>
    )
}

/**
 * @name Menu List
 * @icon Minus
 * @group Menu
 */
export const MenuList: React.SFC<MenuListProps> = props => {
    return (
        <MenuListComponent {...props}>
            {props.children}
        </MenuListComponent>
    )
}

