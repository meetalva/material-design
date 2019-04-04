
import * as React from 'react';
import RadioComponent from '@material-ui/core/Radio';
import RadioGroupComponent from '@material-ui/core/RadioGroup';
import { StandardProps } from './types';
import { SwitchBaseProps } from './switch';
import { FormGroupProps } from './form';

export interface RadioProps extends StandardProps<SwitchBaseProps, 'color'> {

    /**
     * @name Color
     * */
    color?: RadioColor;

    /** @name Checked Icon */
    checkedIcon?: React.ReactNode;

    /** @name Icon */
    icon?: React.ReactNode;
}

export interface RadioGroupProps extends StandardProps<FormGroupProps> {

    /**
     * @name Name
     * @description The name used to reference the value of the control.
     * @group Radio Group
     * */
    name?: string;

     /**
     * @name Value
     * @group Radio Group
     * */
    value?: string;

    /**
     * @name On Change
     * @description Callback fired when a radio button is selected.
     * */
    onChange?: (event: React.ChangeEvent<{}>, value: string) => void;
}

export enum RadioColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default'
}

/**
 * @name Radio
 * @group Form
 */

export const Radio: React.SFC<RadioProps> = props => {
    return (
        <RadioComponent {...props}>
            {props.children}
        </RadioComponent>
    )
}

/**
 * @name Radio Group
 * @group Form
 */

export const RadioGroup: React.SFC<RadioGroupProps> = props => {
    return (
        <RadioGroupComponent {...props}>
            {props.children}
        </RadioGroupComponent>
    )
}
