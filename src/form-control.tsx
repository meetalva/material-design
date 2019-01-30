import * as React from 'react';
import FormControlComponent from '@material-ui/core/FormControl';
import FormControlLabelComponent from '@material-ui/core/FormControlLabel';
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
    variant?: FormControlVariant;
}

export interface FormControlLabelProps {
    /** @name Checked */
    checked?: boolean;

    /** @name Control */
    control: React.ReactElement<any>;

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

export enum FormControlVariant {
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
 * @group Form Control
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
 * @group Form Control
 */
export const FormControlLabel: React.SFC<FormControlLabelProps> = props => {
    return (
        <FormControlLabelComponent {...props}>
            {props.children}
        </FormControlLabelComponent>
    )
}
