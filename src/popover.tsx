import * as React from 'react';
import PopoverComponent from '@material-ui/core/Popover';

export interface PopoverProps {
    /** @name Open */
    open: boolean;

    /** @name Anchor Origin */
    anchorOrigin?: PopoverOrigin;

    /** @name Anchor Position */
    anchorPosition?: PopoverPosition;

    /** @name Anchor Reference */
    anchorReference?: PopoverReference;

    children?: React.ReactNode;

    /** @name Elevation */
    elevation?: number;

    /** @name Margin Threshold */
    marginThreshold?: number;

    /** @name Modal */
    modal?: boolean;

    /** @name Role */
    role?: string;

    /** @name Transform Origin */
    transformOrigin?: PopoverOrigin;
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
