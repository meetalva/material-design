import * as React from 'react';
import ModalComponent from '@material-ui/core/Modal';

export interface ModalProps {

    /**
     * @name On Backdrop Click
     * @description Callback fired when the backdrop is clicked.
     * */
    onBackdropClick?: React.ReactEventHandler<{}>;

    /**
     * @name On Close
     * @description Callback fired when the component requests to be closed.
     * */
    onClose?: React.ReactEventHandler<{}>;

    /**
     * @name On Escape Key Down
     * @description Callback fired when the escape key is pressed.
     * */
    onEscapeKeyDown?: React.ReactEventHandler<{}>;

    /**
     * @name  Open
     * @default true
     * @group Modal
     * @description If true, the modal is open.
     * */
    open: boolean;
}

/**
 * @name Modal
 * @group Utils
 * @ignore
 */
export const Modal: React.SFC<ModalProps> = props => {
    return (
        <ModalComponent {...props}>
            {props.children}
        </ModalComponent>
    )
}
