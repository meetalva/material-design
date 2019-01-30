import * as React from 'react';
import InputComponent from '@material-ui/core/Input';
import InputAdornmentComponent from '@material-ui/core/InputAdornment';
import InputLabelComponent from '@material-ui/core/InputLabel';
import { InputVariant } from './types'; 

export interface InputProps {
    /** @name Disable Underline */
    disableUnderline?: boolean;
}

export interface InputAdornmentProps {
    /** @name Disable Pointer Events */
    disablePointerEvents?: boolean;

    /** @name Disable Typography */
    disableTypography?: boolean;

    /** @name Position */
    position: InputAdornmentPosition;

    /** @name Variant */
    variant?: InputVariant;
}

export interface InputLabelProps {
    /** @name Disable Animation */
    disableAnimation?: boolean;

    /** @øname Disabled */
    disabled?: boolean;

    /** @name Error */
    error?: boolean;

    /** @name Focused */
    focused?: boolean;

    /** @name Required */
    required?: boolean;

    /** @name Shrink */
    shrink?: boolean;

    /** @name Variant */
    variant?: InputVariant;
}

export enum InputAdornmentPosition {
    Start = 'start',
    End = 'end'
}

/**
 * @name Input
 * @group Input
 */
export const Input: React.SFC<InputProps> = props => {
    return (
        <InputComponent {...props}>
            {props.children}
        </InputComponent>
    )
}

/**
 * @name Input Adornment
 * @group Input
 */
export const InputAdornment: React.SFC<InputAdornmentProps> = props => {
    return (
        <InputAdornmentComponent {...props}>
            {props.children}
        </InputAdornmentComponent>
    )
}

/**
 * @name Input Label
 * @group Input
 */
export const InputLabel: React.SFC<InputLabelProps> = props => {
    return (
        <InputLabelComponent {...props}>
            {props.children}
        </InputLabelComponent>
    )
}
