import * as React from 'react';
import SwitchComponent from '@material-ui/core/Switch';

export interface SwitchProps {
    /** @name Icon */
    icon?: React.ReactNode;

    /** @name Checked Icon */
    checkedIcon?: React.ReactNode;

    /** @name Color */
    color?: SwitchColor;
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
