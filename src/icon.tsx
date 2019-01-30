import * as React from 'react';
import IconComponent from '@material-ui/core/Icon';

export interface IconProps {
    /** @name Icon */
    color?: IconColor;
    
    /** @name Font Size */
    fontSize?: IconFontSize;
}

export enum IconColor {
    Inherit = 'inherit',
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default',
    Action = 'action',
    Disabled = 'disabled',
    Error = 'error'
}

export enum IconFontSize {
    Inherit = 'inherit',
    Default = 'default',
    Small = 'small',
    Large = 'large'
}

/**
 * @name Icon
 */
export const Icon: React.SFC<IconProps> = props => {
    return (
        <IconComponent {...props}>
            {props.children}
        </IconComponent>
    )
}
