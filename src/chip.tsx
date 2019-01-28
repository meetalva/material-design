import * as React from 'react';
import Component from '@material-ui/core/Chip';
import { Color } from './types';

export interface ChipProps {
    /** @name Label */
    label?: string;

    /** @name Delete */
    delete?: boolean;

    /** @name Color */
    color?: Color;

    /** @name Style */
    variant?: ChipVariant;
}

export enum ChipVariant {
    Default = 'default',
    Outlined = 'outlined'
}

/**
 * @name Chip
 * @description Compact elements that represent an input, attribute, or action
 * @icon ToggleLeft
 */
export const Chip: React.SFC<ChipProps> = props => {
    return (
        <Component {...props} onDelete={props.delete ? (() => console.log): undefined} />
    )
}
