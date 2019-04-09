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

    children?: React.ReactNode;
}

export interface InputBaseProps {

    /** 
     * @name Value 
     * @group Input Base
     * */
    value?: string;

    /**
     * @name Placeholder 
     * @group Input Base
     * */
    placeholder?: string;

    /**
     * @name HTML5 Type
     * @group Input Base
     * */
    type?: string;

    /**
     * @name Required 
     * @group Input Base
     * */
    required?: boolean;

    /** 
     * @name Read Only
     * @group State
     *  */
    readOnly?: boolean;

    /**
     * @name Disabled 
     * @group State
     * */
    disabled?: boolean;

    /** 
     * @name Error
     * @group State
     * */
    error?: boolean;


    /**
     * @name Full Width
     * @group Style
     * */
    fullWidth?: boolean;

    /**
     * @name Margin 
     * @group Style
     * */
    margin?: InputBaseMargin;

    /**
     * @name Multiline
     * @group Text Area
     * */
    multiline?: boolean;

    /**
     * @name Rows 
     * @group Text Area
     * */
    rows?: number;

    /**
     * @name Rows Max 
     * @group Text Area
     * */
    rowsMax?: number;

    /**
     * @name On Change 
     * @description Callback fired when the value is changed.
     * */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
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
 * @description Place inside Adornment slot
 * @ignore
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
 * @icon Tag
 */
export const InputLabel: React.SFC<InputLabelProps> = props => {
    return (
        <InputLabelComponent {...props}>
            {props.children}
        </InputLabelComponent>
    )
}
