import * as React from 'react';
import BadgeComponent from '@material-ui/core/Badge';
import { ColorWithInheritAndError } from './types';

export interface BadgeProps {
    /**
     * @name Color
     * @default Primary
     * */
    color?: ColorWithInheritAndError;

    /**
     * @name Content
     * @default 1
     * */
    badgeContent?: string;
   
    /** @name Invisible */
    invisible?: boolean;

    /**
     * @name Variant
     * @default Standard
     * @control ButtonGroup
     **/
    variant?: BadgeVariant;

    children: React.ReactNode;
}

export enum BadgeVariant {
    Standard = 'standard',
    Dot = 'dot'
}

/**
 * @name Badge
 * @description Small badge to the top-right of its child(ren)
 */
export const Badge: React.SFC<BadgeProps> = props => {
    return (
        <BadgeComponent {...props}>
            {props.children}
        </BadgeComponent>
    )
}
