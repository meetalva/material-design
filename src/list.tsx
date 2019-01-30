import * as React from 'react';
import ListComponent from '@material-ui/core/List';
import ListItemComponent from '@material-ui/core/ListItem';
import ListItemAvatarComponent from '@material-ui/core/ListItemAvatar';
import ListItemIconComponent from '@material-ui/core/ListItemIcon';
import ListItemSecondaryActionComponent from '@material-ui/core/ListItemSecondaryAction';
import ListItemTextComponent from '@material-ui/core/ListItemText';
import ListSubheaderComponent from '@material-ui/core/ListSubheader';

export interface ListProps {
    /** @name Dense */
    dense?: boolean;

    /** @name Disable Padding */
    disablePadding?: boolean;

    /** @name Subheader */
    subheader?: React.ReactElement<any>;
}

export interface ListItemProps {
    /** @name Button */
    button?: boolean;

    /** @name Dense */
    dense?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Disable Gutters */
    disableGutters?: boolean;

    /** @name Divider */
    divider?: boolean;

    /** @name Focus Visible Class */
    focusVisibleClassName?: string;

    /** @name Selected */
    selected?: boolean;
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

    /** @name Disable Gutters */
    disableGutters?: boolean;

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


