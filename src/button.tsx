import * as React from 'react';
import ButtonComponent from '@material-ui/core/Button';
import { Color } from './types';

export interface ButtonProps {
    /** @name Color @default Primary */
    color?: Color;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Full Width */
    fullWidth?: boolean;

    /** @name Size @default Medium */
    size?: ButtonSize;

    /** @name Variant @default Contained */
    variant?: ButtonVariant;
}

export enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export enum ButtonVariant {
    Text = 'text',
    Flat = 'flat',
    Outlined = 'outlined',
    Contained = 'contained',
    Raised = 'raised',
    Fab = 'fab',
    ExtendedFab = 'extendedFab'
}

/**
 * @name Button
 * @description Allow users to take actions and make choices, with a single tap
 * @icon MinusSquare
 */
export const Button: React.SFC<ButtonProps> = props => {
    return (
        <ButtonComponent {...props}>
            {props.children}
        </ButtonComponent>
    )
}
