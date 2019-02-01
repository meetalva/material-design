import * as React from 'react';
import PopoverComponent from '@material-ui/core/Popover';
import { PaperProps } from './paper';
import { StandardProps } from './types';
import { ModalProps } from './modal';

export interface PopoverProps extends StandardProps<ModalProps> {
    /** @name Open @group Popover */
    open: boolean;

    /** @name Anchor Origin @group Popover */
    anchorOrigin?: PopoverOrigin;

    /** @name Anchor Position @group Popover */
    anchorPosition?: PopoverPosition;

    /** @name Anchor Reference @group Popover */
    anchorReference?: PopoverReference;

    children?: React.ReactNode;

    /** @name Elevation @group Popover */
    elevation?: number;

    /** @name Margin Threshold @group Popover */
    marginThreshold?: number;

    /** @name Modal @group Popover */
    modal?: boolean;

    /** @name Role @group Popover */
    role?: string;

    /** @name Transform Origin @group Popover */
    transformOrigin?: PopoverOrigin;

    /** @name Paper Props */
    PaperProps?: Partial<PaperProps>;
}

export interface PopoverOrigin {
    horizontal: 'left' | 'center' | 'right' | number;
    vertical: 'top' | 'center' | 'bottom' | number;
}
  
export interface PopoverPosition {
    top: number;
    left: number;
}

export type PopoverReference = 'anchorEl' | 'anchorPosition' | 'none';

/**
 * @name Popover
 */
export const Popover: React.SFC<PopoverProps> = props => {
    return (
        <PopoverComponent {...props}>
            {props.children}
        </PopoverComponent>
    )
}
