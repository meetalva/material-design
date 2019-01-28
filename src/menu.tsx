import * as React from 'react';
import MenuComponent from '@material-ui/core/Menu';
import MenuItemComponent from '@material-ui/core/MenuItem';

export interface MenuProps {
    /** @name Open @default true */
    open: boolean;
}

export interface MenuItemProps {
    /** @name Label @default Menu Item */
    label?: string;

    /** @name Selected */
    selected?: boolean;

    /** @name Show Dividers */
    divider?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Interaction */
    onClick?: React.EventHandler<any>;
}

/**
 * @name Menu
 * @description Display a list of choices on temporary surfaces
 * @icon Menu
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
 */
export const MenuItem: React.SFC<MenuItemProps> = props => {
    return (
        <MenuItemComponent {...props}>
            {props.label}
        </MenuItemComponent>
    )
}
