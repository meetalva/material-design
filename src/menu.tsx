import * as React from 'react';
import MenuComponent from '@material-ui/core/Menu';
import MenuItemComponent from '@material-ui/core/MenuItem';
import { PopoverProps } from './popover';
import { ListItemProps, ListProps } from './list';
import { StandardProps } from './types';

export interface MenuProps extends StandardProps<PopoverProps>  {

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { MenuItem } from './';
    * 
    * export default () => (
    * <>
    *   <MenuItem button="true" selected="true" />
    *   <MenuItem button="true" />
    *   <MenuItem button="true" />
    * <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface MenuItemProps extends StandardProps<ListItemProps> {

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <Text text="Option" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface MenuListProps extends StandardProps<ListProps> {

    /** @name Disable List Wrap */
    disableListWrap?: boolean;

    /** @name On Key Down */
    onKeyDown?: React.ReactEventHandler<React.KeyboardEvent<any>>;
}

/**
 * @name Menu
 * @description List of choices on temporary surfaces
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