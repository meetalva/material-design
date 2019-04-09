import * as React from 'react';
import ListComponent from '@material-ui/core/List';
import ListItemComponent from '@material-ui/core/ListItem';
import ListItemAvatarComponent from '@material-ui/core/ListItemAvatar';
import ListItemIconComponent from '@material-ui/core/ListItemIcon';
import ListItemSecondaryActionComponent from '@material-ui/core/ListItemSecondaryAction';
import ListItemTextComponent from '@material-ui/core/ListItemText';
import ListSubheaderComponent from '@material-ui/core/ListSubheader';
import { StandardProps } from './types';
import { ButtonBaseProps } from './button';

export interface ListProps {

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { ListItem } from './list';
    * 
    * export default () => (
    *   <>
    *       <ListItem />
    *       <ListItem />
    *       <ListItem />
    *   <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface ListItemProps extends StandardProps<ButtonBaseProps> {

    /**
     * @name Button
     * @description If true, the list item will be a button
     * @group List Item
     * @default true
     * */
    button?: boolean;

    /**
     * @name Dense
     * @group List Item
     * */
    dense?: boolean;

    /**
     * @name Disabled
     * @group List Item
     * */
    disabled?: boolean;

    /**
     * @name Divider
     * @group List Item
     * */
    divider?: boolean;

    /**
     * @name Selected
     * @group List Item
     * */
    selected?: boolean;

    /**
     * @name On Click
     * @description Set an interaction that happens on Click.
     * */
    onClick?: React.MouseEventHandler<HTMLElement>;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { ListItemText } from './list';
    * 
    * export default () => (
    *   <ListItemText />
    * );
    * ```
    **/
   children?: React.ReactNode;
}

export interface ListItemIconProps {
    children: React.ReactElement;
}

export interface ListItemTextProps {
    /** @name Disable Typography */
    disableTypography?: boolean;

    /** @name Inset */
    inset?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <Text text="List Item" />
    * );
    * ```
    **/
    primary?: React.ReactNode;

    /**
     * @name Secondary Content
     */
    secondary?: React.ReactNode;

}

export interface ListSubheaderProps {

    /**
     * @name Color
     * @control ButtonGroup
     * @group List Subheader
     * @ignore
     */
    color?: ListSubheaderColor;

    /** 
     * @name Disable Sticky 
     * @group List Subheader
     * */
    disableSticky?: boolean;

    /**
     * @name Inset
     * @group List Subheader
     *  */
    inset?: boolean;

    children?: React.ReactNode;
}

export enum ListSubheaderColor {
    Default = 'default',
    Primary = 'primary',
    Inherit = 'inherit'
}

/**
 * @name List
 * @group List
 * @description Continuous, vertical indexes of text or images
 * @icon Menu
 */
export const List: React.SFC<ListProps> = props => {
    return (
        <ListComponent {...props}>
            {props.children}
        </ListComponent>
    )
}

/**
 * @name List Item
 * @group List
 * @icon Minus
 * 
 */
export const ListItem: React.SFC<ListItemProps> = props => {
    return (
        <ListItemComponent {...props}>
            {props.children}
        </ListItemComponent>
    )
}

/**
 * @name List Item Avatar
 * @group List
 * @ignore
 */
export const ListItemAvatar: React.SFC = props => {
    return (
        <ListItemAvatarComponent {...props}>
            {props.children}
        </ListItemAvatarComponent>
    )
}

/**
 * @name List Item Icon
 * @group List
 * @icon
 */
export const ListItemIcon: React.SFC<ListItemIconProps> = props => {
    return (
        <ListItemIconComponent {...props}>
            {props.children}
        </ListItemIconComponent>
    )
}

/**
 * @name List Item Secondary Action
 * @group List
 * @ignore
 */
export const ListItemSecondaryAction: React.SFC= props => {
    return (
        <ListItemSecondaryActionComponent {...props}>
            {props.children}
        </ListItemSecondaryActionComponent>
    )
}

/**
 * @name List Item Text
 * @group List
 * @icon Type
 */
export const ListItemText: React.SFC<ListItemTextProps> = props => {
    return (
        <ListItemTextComponent {...props}>
            {props.children}
        </ListItemTextComponent>
    )
}

/**
 * @name List Subheader
 * @group List
 */
export const ListSubheader: React.SFC<ListSubheaderProps> = props => {
    return (
        <ListSubheaderComponent {...props}>
            {props.children}
        </ListSubheaderComponent>
    )
}
