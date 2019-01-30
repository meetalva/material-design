import * as React from 'react';
import BackdropComponent from '@material-ui/core/Backdrop';

export interface BackdropProps {
    /** @name Invisible */
    invisible?: boolean;

    /** @name On Click */
    onClick?: React.ReactEventHandler<{}>;

    /** @name Open */
    open: boolean;
}

/**
 * @name Backdrop
 */
export const Backdrop: React.SFC<BackdropProps> = props => {
    return (
        <BackdropComponent {...props}>
            {props.children}
        </BackdropComponent>
    )
}
