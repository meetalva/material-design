import * as React from 'react';
import Component from '@material-ui/core/Card';

export interface CardProps {
    /** @name Raised */
    raised?: boolean;

    /** @name Width @default 100px */
    width: string;

    /** @name Height @default 100px */
    height: string;
}

/**
 * @name Card
 * @description Cards contain content and actions about a single subject
 * @icon Square
 */
export const Card: React.SFC<CardProps> = props => {
    return (
        <Component
            raised={props.raised}
            style={{
                height: props.height,
                width: props.width
            }}
        >
            {props.children}
        </Component>
    )
}
