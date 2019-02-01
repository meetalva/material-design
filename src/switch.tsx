import * as React from 'react';
import SwitchComponent from '@material-ui/core/Switch';
import { StandardProps } from './types';
import { IconButtonProps } from './button';

export interface SwitchProps {
    /** @name Icon */
    icon?: React.ReactNode;

    /** @name Checked Icon */
    checkedIcon?: React.ReactNode;

    /** @name Color */
    color?: SwitchColor;
}


export interface SwitchBaseProps extends StandardProps<IconButtonProps> {
    /** @name Auto Focus */
    autoFocus?: boolean;

    /** @name Checked */
    checked?: boolean;

    /** @name Checked Icon */
    checkedIcon: React.ReactNode;

    /** @name Default Checked */
    defaultChecked?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Disable Ripple */
    disableRipple?: boolean;

    /** @name Icon */
    icon: React.ReactNode;

    /** @name Input Props */
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

    /** @name Input Ref */
    inputRef?: React.Ref<any>;

    /** @name Name */
    name?: string;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

    /** @name Read Only */
    readOnly?: boolean;

    /** @name Required */
    required?: boolean;

    /** @name Tab Index */
    tabIndex?: number;

    /** @name Value */
    value?: string | number | boolean;
}

export enum SwitchColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default'
}

/**
 * @name Switch
 */
export const Switch: React.SFC<SwitchProps> = props => {
    return (
        <SwitchComponent {...props}>
            {props.children}
        </SwitchComponent>
    )
}
