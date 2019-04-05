import * as React from 'react';
import SnackbarComponent from '@material-ui/core/Snackbar';
import SnackbarContentComponent from '@material-ui/core/SnackbarContent';
import { StandardProps } from './types';
import { PaperProps } from './paper';

export interface SnackbarProps {


    /**
     * @name Open
     * @group Snackbar
     * */
    open: boolean;

    /**
     * @name Anchor Origin
     * @description The anchor of the Snackbar.
     * @group Snackbar
     * */
    anchorOrigin?: SnackbarOrigin;

    /**
     * @name On Close
     * @description Callback fired when the component requests to be closed.
     * */
    onClose?: (event: React.SyntheticEvent<any>, reason: string) => void;


    /** @name Action */
    action?: React.ReactNode;

    /** @name Message */
     message?: React.ReactNode;
}

export interface SnackbarContentProps extends StandardProps<PaperProps> {
    /** @name Action */
    action?: React.ReactNode;

    /** @name Message */
    message?: React.ReactNode;
}

export interface SnackbarOrigin {
    horizontal: SnackbarOriginHorizontal;
    vertical: SnackbarOriginVertical;
}

export enum SnackbarOriginHorizontal {
    Left = 'left',
    Center = 'center',
    Right = 'right'
}
export enum SnackbarOriginVertical {
    Top = 'top',
    Bottom = 'bottom'
}

/**
 * @name Snackbar
 * @group Snackbar
 * @description Brief messages about app processes
 * @icon MessageSquare
 */
export const Snackbar: React.SFC<SnackbarProps> = props => {
    return (
        <SnackbarComponent {...props}>
            {props.children}
        </SnackbarComponent>
    )
}

/**
 * @name Snackbar Content
 * @description Always shows the message
 * @group Snackbar
 * @icon Info
 */
export const SnackbarContent: React.SFC<SnackbarContentProps> = props => {
    return (
        <SnackbarContentComponent {...props}>
            {props.children}
        </SnackbarContentComponent>
    )
}

