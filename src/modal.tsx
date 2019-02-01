import * as React from 'react';
import ModalComponent from '@material-ui/core/Modal';
import { BackdropProps } from './backdrop';

export interface ModalProps {
    /** @name Backdrop Props */
    BackdropProps?: Partial<BackdropProps>;

    /** @name Close After Transition */
    closeAfterTransition?: boolean;

    /** @name Disable Auto Focus */
    disableAutoFocus?: boolean;

    /** @name Disable Backdrop Click */
    disableBackdropClick?: boolean;

    /** @name Disable Enforce Focus */
    disableEnforceFocus?: boolean;

    /** @name Disable Escape Key Down */
    disableEscapeKeyDown?: boolean;

    /** @name Disable Restore Focus */
    disableRestoreFocus?: boolean;

    /** @name Hide Backdrop */
    hideBackdrop?: boolean;

    /** @name Keep Mounted */
    keepMounted?: boolean;

    /** @ãme On Backdrop Click */
    onBackdropClick?: React.ReactEventHandler<{}>;

    /** @name On Close */
    onClose?: React.ReactEventHandler<{}>;

    /** @name On Escape Key Down */
    onEscapeKeyDown?: React.ReactEventHandler<{}>;

    /** @name Open */
    open: boolean;
}

/**
 * @name Modal
 */
export const Modal: React.SFC<ModalProps> = props => {
    return (
        <ModalComponent {...props}>
            {props.children}
        </ModalComponent>
    )
}
