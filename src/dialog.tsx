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
     * @default SM
     * */
    maxWidth: DialogMaxWidth;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { DialogTitle, DialogContent, DialogContentText, DialogActions } from './';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <>
    *       <DialogTitle />
    *       <DialogContent>
    *           <DialogContentText />
    *       </DialogContent>
    *        <DialogActions />
    *   <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface DialogTitleProps {

    /**
     * @name Disable Typography
     * @group Dialog Title
     * */
    disableTypography?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <Text text="Dialog Title">    
    * );
    * ```
    **/
    children?: React.ReactNode;

}

export interface DialogActionProps {

    /**
     * @name Disable Action Spacing
     * @group Dialog Action
     * */
    disableActionSpacing?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Button } from './';
    * 
    * export default () => (
    *   <Button variant="text" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface DialogContentProps {
    
    children?: React.ReactNode;
}

export interface DialogContentTextProps extends StandardProps<TypographyProps> {
    
    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <Text text="Dialog Text lorem ipsum dolor sit..."> 
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export enum DialogScroll {
    Body = 'body',
    Paper = 'paper'
}

export enum DialogMaxWidth {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
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
 * @icon MinusSquare
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
 * @icon Type
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
 * @icon Square
 * 
 */
export const DialogContent: React.SFC<DialogContentProps> = props => {
    return (
        <DialogContentComponent>
            {props.children}
        </DialogContentComponent>
    )
}
 
/**
 * @name Dialog Content Text
 * @group Dialog
 * @icon Type
 */
export const DialogContentText: React.SFC<DialogContentTextProps> = props => {
    return (
        <DialogContentTextComponent {...props}>
            {props.children}
        </DialogContentTextComponent>
    )
}
