import * as React from 'react';
import SnackbarComponent from '@material-ui/core/Snackbar';
import SnackbarContentComponent from '@material-ui/core/SnackbarContent';
import { StandardProps } from './types';
import { PaperProps } from './paper';

export interface SnackbarProps {
    /** @name Anchor Origin */
    anchorOrigin?: SnackbarOrigin;

    /** @name Auto Hide Duration */
    autoHideDuration?: number;

    /** @name Disable Window Blur Listener */
    disableWindowBlurListener?: boolean;

    /** @name Action */
    action?: React.ReactNode;

    /** @name Message */
    message?: React.ReactNode;

    /** @name On Close */
    onClose?: (event: React.SyntheticEvent<any>, reason: string) => void;

    /** @name On Mouse Enter */
    onMouseEnter?: React.MouseEventHandler<any>;

    /** @name On Mouse Leave */
    onMouseLeave?: React.MouseEventHandler<any>;

    /** @name Open */
    open: boolean;

    /** @name Resume Hide Duration */
    resumeHideDuration?: number;

    /** @name Content */
    ContentProps?: Partial<SnackbarContentProps>;
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
 * @group Snackbar
 */
export const SnackbarContent: React.SFC<SnackbarContentProps> = props => {
    return (
        <SnackbarContentComponent {...props}>
            {props.children}
        </SnackbarContentComponent>
    )
}

