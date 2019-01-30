import * as React from 'react';
import { BaseProps } from './types';
import AvatarComponent from '@material-ui/core/Avatar';

export interface AvatarProps extends BaseProps {
    /** @name Alt */
    alt?: string;

    /** @name Children Class Name */
    childrenClassName?: string;

    /** @name Sizes */
    sizes?: string;

    /** @name Src */
    src?: string;

    /** @name SrcSet */
    srcSet?: string;
}

/**
 * @name Avatar
 * @description Used in everything from tables to dialog menus
 */
export const Avatar: React.SFC<AvatarProps> = props => {
    return (
        <AvatarComponent {...props}>
            {props.children}
        </AvatarComponent>
    )
}
