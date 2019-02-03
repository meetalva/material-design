
import * as React from 'react';
import RadioComponent from '@material-ui/core/Radio';
import RadioGroupComponent from '@material-ui/core/RadioGroup';
import { StandardProps } from './types';
import { SwitchBaseProps } from './switch';
import { FormGroupProps } from './form';

export interface RadioProps extends StandardProps<SwitchBaseProps, 'color'> {
    /** @name Color */
    color?: RadioColor;

    /** @name Checked Icon */
    checkedIcon?: React.ReactNode;

    /** @name Icon */
    icon?: React.ReactNode;
}

export interface RadioGroupProps extends StandardProps<FormGroupProps> {
    /** @name Name */
    name?: string;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{}>, value: string) => void;

    /** @name Value */
    value?: string;
}

export enum RadioColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default'
}

/**
 * @name Radio
 * @group Radio
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
 * @group Radio
 */

export const RadioGroup: React.SFC<RadioGroupProps> = props => {
    return (
        <RadioGroupComponent {...props}>
            {props.children}
        </RadioGroupComponent>
    )
}
