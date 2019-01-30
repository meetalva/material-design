import * as React from 'react';
import DialogComponent from '@material-ui/core/Dialog';
import DialogActionsComponent from '@material-ui/core/DialogActions';
import DialogContentComponent from '@material-ui/core/DialogContent';
import DialogContentTextComponent from '@material-ui/core/DialogContentText';
import DialogTitleComponent from '@material-ui/core/DialogTitle';

export interface DialogProps {
    /** @name Open @default true */
    open: boolean;

    /** @name Title @default Dialog */
    title?: string;

    /** @name Content @default Hey! You just opened this dialog. */
    contentText?: string;

    /** @name Full Width @default true */
    fullWidth?: boolean;

    /** @name Full Screen */
    fullScreen: boolean;

    /** @name Max Width */
    maxWidth: DialogMaxWidth;

    /** @name Content */
    content?: React.ReactNode;

    /** @name Actions */
    actions?: React.ReactNode;
}

export interface DialogTitleProps {
    title?: string;
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
            <DialogTitleComponent>{props.title}</DialogTitleComponent>
            <DialogContentComponent>
                <DialogContentTextComponent>
                    {props.contentText}
                </DialogContentTextComponent>
                {props.content}
            </DialogContentComponent>
            <DialogActionsComponent>
                {props.actions}
            </DialogActionsComponent>
            {props.children}
        </DialogComponent>
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
