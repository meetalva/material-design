import * as React from 'react';
import DialogComponent from '@material-ui/core/Dialog';

export interface DialogProps {
    /** @name Open @default true */
    open: boolean;

    /** @name Full Width @default true */
    fullWidth?: boolean;

    /** @name Full Screen */
    fullScreen: boolean;

    children?: React.ReactNode;
}

/**
 * @name Dialog
 * @description Inform users about a task and can contain critical information, require decisions, or involve multiple tasks
 * @icon MessageSquare
 */
export const Dialog: React.SFC<DialogProps> = props => {
    return (
        <DialogComponent {...props}>
            {props.children}
        </DialogComponent>
    )
}
