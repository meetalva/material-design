import * as React from 'react';
import InputComponent from '@material-ui/core/Input';
import InputAdornmentComponent from '@material-ui/core/InputAdornment';
import InputBaseComponent from '@material-ui/core/InputBase';
import InputLabelComponent from '@material-ui/core/InputLabel';
import { InputVariant, StandardProps } from './types'; 
import { FormLabelProps } from './form';

export interface InputProps extends StandardProps<InputBaseProps> {
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

export interface InputBaseProps {
    /** @name Auto Complete */
    autoComplete?: string;

    /** @name Auto Focus */
    autoFocus?: boolean;

    /** @name Default Value */
    defaultValue?: Array<string | number | boolean | object> | string | number | boolean | object;

    /** @name Disabled */
    disabled?: boolean;

    /** @name End Adornment */
    endAdornment?: React.ReactNode;

    /** @name Error */
    error?: boolean;

    /** @name Full Width */
    fullWidth?: boolean;

    /** @name ID */
    id?: string;

    /** @name Input Ref */
    inputRef?: React.Ref<any> | React.RefObject<any>;

    /** @name Margin */
    margin?: InputBaseMargin;

    /** @name Multiline */
    multiline?: boolean;

    /** @name Name */
    name?: string;

    /** @name Placeholder */
    placeholder?: string;

    /** @name Read Only */
    readOnly?: boolean;

    /** @name Required */
    required?: boolean;

    /** @name Rows */
    rows?: number;

    /** @name Rows Max */
    rowsMax?: number;

    /** @name Start Adornment */
    startAdornment?: React.ReactNode;

    /** @name Type */
    type?: string;

    /** @name Value */
    value?: Array<string | number | boolean | object> | string | number | boolean | object;

    /** @name On Change */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;

    /** @name On Key Down */
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;

    /** @name On Key Up */
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export interface InputLabelProps extends StandardProps<FormLabelProps> {
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

export enum InputBaseMargin {
    Dense = 'dense',
    None = 'none'
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
 * @name Input Base
 * @group Input
 */
export const InputBase: React.SFC<InputBaseProps> = props => {
    return (
        <InputBaseComponent {...props}>
            {props.children}
        </InputBaseComponent>
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
