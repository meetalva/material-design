import * as React from 'react';
import DialogComponent from '@material-ui/core/Dialog';
import DialogActionsComponent from '@material-ui/core/DialogActions';
import DialogContentComponent from '@material-ui/core/DialogContent';
import DialogContentTextComponent from '@material-ui/core/DialogContentText';
import DialogTitleComponent from '@material-ui/core/DialogTitle';
import { ModalProps } from './modal'
import { TypographyProps } from './typography';
import { StandardProps } from './types';

export interface DialogProps extends StandardProps<ModalProps> {
    /**
     * @name Open
     * @default true
     * @group Dialog
     * */
    open: boolean;

    /**
     * @name Full Width
     * @default false
     * @group Style
     * */
    fullWidth?: boolean;

    /**
     * @name Full Screen
     * @default false
     * @group Style
     * */
    fullScreen: boolean;

    /**
     * @name Max Width
     * @control ButtonGroup
     * @group Style
     * */
    maxWidth: DialogMaxWidth;

     /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from './';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <>
    *       <DialogTitle>
    *           <Text text="Dialog Title">    
    *       </DialogTitle>
    *       <DialogContent>
    *           <DialogContentText>
    *                <Text text="Dialog Text lorem ipsum dolor sit..."> 
    *           </DialogContentText>
    *       </DialogContent>
    *        <DialogActions>
    *           <Button variant="text" color="primary">
    *               <Text text="Disagree"> 
    *           </Button>
    *           <Button variant="text" color="primary" autoFocus>
    *               <Text text="Agree">
    *           </Button>
    *      </DialogActions>
    *   <>
    * );
    * ```
    **/
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

export interface DialogContentTextProps extends StandardProps<TypographyProps> {
    
}

export enum DialogScroll {
    Body = 'body',
    Paper = 'paper'
}

export enum DialogMaxWidth {
    XS = 'xs',
    S = 'sm',
    M = 'md',
    L = 'lg',
    XL = 'xl',
}

/**
 * @name Dialog
 * @description Modal window that appears in front of app content
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
export const DialogContentText: React.SFC<DialogContentTextProps> = props => {
    return (
        <DialogContentTextComponent {...props}>
            {props.children}
        </DialogContentTextComponent>
    )
}
