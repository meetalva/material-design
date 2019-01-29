import * as React from 'react';
import { BaseProps } from './types';
import AvatarComponent from '@material-ui/core/Avatar';

export interface AvatarProps extends BaseProps {
    src?: string;
    label?: string;
}

/**
 * @name Avatar
 * @description Used in everything from tables to dialog menus
 */
export const Avatar: React.SFC<AvatarProps> = props => {
    return (
        <AvatarComponent {...props} style={{
            width: props.width,
            height: props.height,
            margin: props.margin,
            color: props.color,
            backgroundColor: props.backgroundColor
        }}>
            {props.label}
        </AvatarComponent>
    )
}
