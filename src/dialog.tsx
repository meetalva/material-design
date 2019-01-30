import * as React from 'react';
import DialogComponent from '@material-ui/core/Dialog';
import DialogActionsComponent from '@material-ui/core/DialogActions';
import DialogContentComponent from '@material-ui/core/DialogContent';
import DialogContentTextComponent from '@material-ui/core/DialogContentText';
import DialogTitleComponent from '@material-ui/core/DialogTitle';

export interface DialogProps {
    /** @name Open @default true */
    open: boolean;

    /** @name Full Width @default true */
    fullWidth?: boolean;

    /** @name Full Screen */
    fullScreen: boolean;

    /** @name Max Width */
    maxWidth: DialogMaxWidth;

    /** @name Scroll */
    scroll?: DialogScroll;

    children?: React.ReactNode;
}

export interface DialogTitleProps {
    /** @name Disable Typography */
    disableTypography?: boolean;
}

export interface DialogActionProps {
    /** @name Disable Action Spacing */
    disableActionSpacing?: boolean;
}

export enum DialogScroll {
    Body = 'body',
    Paper = 'paper'
}

export enum DialogMaxWidth {
    XSmall = 'xs',
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    XLarge = 'xl',
}

/**
 * @name Dialog
 * @description Inform users about a task and can contain critical information, require decisions, or involve multiple tasks
 * @icon MessageSquare
 * @group Dialog
 */
export const Dialog: React.SFC<DialogProps> = props => {
    return (
        <DialogComponent {...props}>
            {props.children}
        </DialogComponent>
    )
}

/**
 * @name Dialog Actions
 * @group Dialog
 */
export const DialogActions: React.SFC<DialogActionProps> = props => {
    return (
        <DialogActionsComponent {...props}>
            {props.children}
        </DialogActionsComponent>
    )
}

/**
 * @name Dialog Title
 * @group Dialog
 */
export const DialogTitle: React.SFC<DialogTitleProps> = props => {
    return (
        <DialogTitleComponent>
            {props.children}
        </DialogTitleComponent>
    )
}

/**
 * @name Dialog Content
 * @group Dialog
 */
export const DialogContent: React.SFC = props => {
    return (
        <DialogContentComponent>
            {props.children}
        </DialogContentComponent>
    )
}
 
/**
 * @name Dialog Content Text
 * @group Dialog
 */
export const DialogContentText: React.SFC = props => {
    return (
        <DialogContentTextComponent {...props}>
            {props.children}
        </DialogContentTextComponent>
    )
}
