import * as React from 'react';
import FabComponent from '@material-ui/core/Fab';
import { ColorWithInherit } from './types';

export interface FabProps {
    /** @name Color */
    color?: ColorWithInherit;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Disable Focus Ripple */
    disableFocusRipple?: boolean;

    /** @name Disable Ripple */
    disableRipple?: boolean;

    /** @name Href */
    href?: string;

    /** @name Size */
    size?: FabSize;

    /** @name Type */
    type?: string;

    /** @name Variant */
    variant?: FabVariant;
}

export enum FabSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export enum FabVariant {
    Round = 'round',
    Extended = 'extended'
}

/**
 * @name Fab
 */
export const Fab: React.SFC<FabProps> = props => {
    return (
        <FabComponent {...props}>
            {props.children}
        </FabComponent>
    )
}
