import * as React from 'react';
import ButtonComponent from '@material-ui/core/Button';
import ButtonBaseComponent from '@material-ui/core/ButtonBase';
import IconButtonComponent from '@material-ui/core/IconButton';
import { ColorWithInherit, StandardProps } from './types';

export interface ButtonProps extends StandardProps<ButtonBaseProps> {
    /** @name Color @default Primary */
    color?: ColorWithInherit;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Disable Focus Ripple */
    disableFocusRipple?: boolean;

    /** @name Disable Ripple */
    disableRipple?: boolean;

    /** @name Full Width */
    fullWidth?: boolean;

    /** @name Href */
    href?: string;

    /** @name Mini */
    mini?: boolean;

    /** @name Size @default Medium */
    size?: ButtonSize;

    /** @name Type */
    type?: string;

    /** @name Variant @default Contained */
    variant?: ButtonVariant;
}

export interface ButtonBaseProps {
    /** @name Center Ripple */
    centerRipple?: boolean;

    /** @name Disable Ripple */
    disableRipple?: boolean;

    /** @name Disable Touch Ripple */
    disableTouchRipple?: boolean;

    /** @name Focus Ripple */
    focusRipple?: boolean;

    /** @name Focus Visible Class Name */
    focusVisibleClassName?: string;

    /** @name On Focus Visible */
    onFocusVisible?: React.FocusEventHandler<any>;
}

export interface IconButtonProps extends StandardProps<ButtonBaseProps> {
    /** @name Color */
    color?: ColorWithInherit;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Disable Ripple */
    disableRipple?: boolean;
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
 * @group Button
 */
export const Button: React.SFC<ButtonProps> = props => {
    return (
        <ButtonComponent {...props}>
            {props.children}
        </ButtonComponent>
    )
}

/**
 * @name Button Base
 * @group Button
 */
export const ButtonBase: React.SFC<ButtonBaseProps> = props => {
    return (
        <ButtonBaseComponent {...props}>
            {props.children}
        </ButtonBaseComponent>
    )
}

/**
 * @name Icon Button
 * @group Button
 */
export const IconButton: React.SFC<IconButtonProps> = props => {
    return (
        <IconButtonComponent {...props}>
            {props.children}
        </IconButtonComponent>
    )
}
