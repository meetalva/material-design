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
     * @name List
     * @description Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.
     */

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { ListSubheader, ListItem, ListItemText } from './';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <>
    *       <ListSubheader>
    *           <Text text="List Items" />
    *       <ListSubheader>
    *       <ListItem button="true">
    *           <ListItemText>
    *               <Text text="Option 1" />
    *           </ListItemText>
    *       </ListItem>
    *       <ListItem button="true">
    *           <ListItemText>
    *               <Text text="Option 2" />
    *           </ListItemText>
    *       </ListItem>
    *   <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface ListItemProps extends StandardProps<ButtonBaseProps> {

    /**
     * @name Button
     * @group List Item
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
     * @name Interaction
     * @description Set an interaction that happens on Click.
     * */
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface ListItemIconProps {
    children: React.ReactElement<any>;
}

export interface ListItemTextProps {
    /** @name Disable Typography */
    disableTypography?: boolean;

    /** @name Inset */
    inset?: boolean;

    /** @name Primary */
    primary?: React.ReactNode;

    /** @name Secondary */
    secondary?: React.ReactNode;
}

export interface ListSubheaderProps {
    color?: ListSubheaderColor;

    /** @name Disable Sticky */
    disableSticky?: boolean;

    /** @name Inset */
    inset?: boolean;
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
