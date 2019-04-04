import * as React from 'react';
import PopoverComponent from '@material-ui/core/Popover';
import { StandardProps } from './types';
import { ModalProps } from './modal';

export interface PopoverProps extends StandardProps<ModalProps> {

    /**
     * @name Open
     * @group Popover
     * @description If true, the popover is visible.
     * */
    open: boolean;

    /**
     * @name Elevation
     * @group Popover
     * @default 8
     * */
    elevation?: number;

    /**
     * @name Margin Threshold
     * @group Popover
     * @description Specifies how close to the edge of the window the popover can appear.
     * @default 16
     * */
    marginThreshold?: number;


    children?: React.ReactNode;
}


/**
 * @name Popover
 * @group Modals
 */
export const Popover: React.SFC<PopoverProps> = props => {
    return (
        <PopoverComponent {...props}>
            {props.children}
        </PopoverComponent>
    )
}
