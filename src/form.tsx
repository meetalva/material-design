import * as React from 'react';
import FormControlComponent from '@material-ui/core/FormControl';
import FormControlLabelComponent from '@material-ui/core/FormControlLabel';
import FormGroupComponent from '@material-ui/core/FormGroup';
import FormHelperTextComponent from '@material-ui/core/FormHelperText';
import FormLabelComponent from '@material-ui/core/FormLabel';
import { Margin } from './types';

export interface FormControlProps {
    /** @name Disabled */
    disabled?: boolean;

    /** @name Error */
    error?: boolean;

    /** @name Full Width */
    fullWidth?: boolean;

    /** @name Margin */
    margin?: Margin;

    /** @name On Blur */
    onBlur?: React.EventHandler<any>;

    /** @name On Focus */
    onFocus?: React.EventHandler<any>;

    /** @name Required */
    required?: boolean;

    /** @name Variant */
    variant?: FormVariant;
}

export interface FormControlLabelProps {
    /** @name Checked */
    checked?: boolean;

    /** @name Control */
    control: React.ReactNode;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Input Ref */
    inputRef?: React.Ref<any>;

    /** @name Label */
    label: React.ReactNode;

    /** @name Name */
    name?: string;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;

    /** @name Label Placement */
    labelPlacement?: FormControlLabelPlacement;

    /** @name Value */
    value?: string;
}

export interface FormGroupProps {
    /** @name Row */
    row?: boolean;
}

export interface FormHelperTextProps {

    /**
     * @name Disabled
     * @group Helper text
     * @description If true, the helper text should be displayed in a disabled state.
     * */
    disabled?: boolean;

    /**
     * @name Error
     * @group Helper text
     * @description If true, helper text should be displayed in an error state.
     * */
    error?: boolean;

    /**
     * @name Variant
     * @group Helper text
     * @control ButtonGroup
     * */
    variant?: FormVariant;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    * <Text text="Helper Text">
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface FormLabelProps {
    /** @name Disabled */
    disabled?: boolean;

    /** @name Error */
    error?: boolean;

    /** @name Filled */
    filled?: boolean;

    /** @name Focused */
    focused?: boolean;

    /** @name Required */
    required?: boolean;
}

export enum FormVariant {
    Standard = 'standard',
    Outlined = 'outlined',
    Filled = 'filled'
}

export enum FormControlLabelPlacement {
    End = 'end',
    Start = 'start',
    Top = 'top',
    Bottom ='bottom'
}

/**
 * @name Form Control
 * @group Form
 */
export const FormControl: React.SFC<FormControlProps> = props => {
    return (
        <FormControlComponent {...props}>
            {props.children}
        </FormControlComponent>
    )
}

/**
 * @name Form Control Label
 * @group Form
 */
export const FormControlLabel: React.SFC<FormControlLabelProps> = props => {
    return (
        <FormControlLabelComponent {...props} control={<>{props.control}</>}>
            {props.children}
        </FormControlLabelComponent>
    )
}

/**
 * @name Form Group
 * @group Form
 */
export const FormGroup: React.SFC<FormGroupProps> = props => {
    return (
        <FormGroupComponent {...props}>
            {props.children}
        </FormGroupComponent>
    )
}

/**
 * @name Form Helper Text
 * @group Form
 */
export const FormHelperText: React.SFC<FormHelperTextProps> = props => {
    return (
        <FormHelperTextComponent {...props}>
            {props.children}
        </FormHelperTextComponent>
    )
}

/**
 * @name Form Label
 * @group Form
 */
export const FormLabel: React.SFC<FormLabelProps> = props => {
    return (
        <FormLabelComponent {...props}>
            {props.children}
        </FormLabelComponent>
    )
}
