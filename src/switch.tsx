import * as React from 'react';
import SwitchComponent from '@material-ui/core/Switch';
import { StandardProps } from './types';
import { IconButtonProps } from './button';

export interface SwitchProps {

    /**
     * @name Icon
     * */
    icon?: React.ReactNode;

    /**
     * @name Checked Icon
     * */
    checkedIcon?: React.ReactNode;

    /**
     * @name Color
     * @control ButtonGroup
     * */
    color?: SwitchColor;
}


export interface SwitchBaseProps extends StandardProps<IconButtonProps> {

    /**
     * @name Value
     * @group State
     * */
    value?: string | number | boolean;

    /**
     * @name Checked
     * @group State
     * */
    checked?: boolean;

    /**
     * @name Disabled
     * @group State
     * */
    disabled?: boolean;

    /**
     * @name Disable Ripple
     * @group Ripple
     * */
    disableRipple?: boolean;

    /**
     * @name On Change
     * @description Callback fired when the state is changed.
     * */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

     /** @name Icon */
     icon?: React.ReactNode;

     /** @name Input Ref */
     inputRef?: React.Ref<any>;
}

export enum SwitchColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default'
}

/**
 * @name Switch
 * @group Selection Controls
 */
export const Switch: React.SFC<SwitchProps> = props => {
    return (
        <SwitchComponent {...props}>
            {props.children}
        </SwitchComponent>
    )
}
