import * as React from 'react';
import ChipComponent from '@material-ui/core/Chip';
import { ColorWithInherit } from './types';

export interface ChipProps {
    /** @name Label */
    label?: React.ReactNode;

    /** @name Delete */
    delete?: boolean;

    /** @name Color */
    color?: ColorWithInherit;

    /** @name Style */
    variant?: ChipVariant;

    /** @name Avatar */
    avatar?: React.ReactElement<any>;

    /** @name On Delete */
    onDelete?: React.EventHandler<any>;

    /** @name Clickable */
    clickable?: boolean;

    /** @name Delete Icon */
    deleteIcon?: React.ReactElement<any>;

    /** @name Icon */
    icon?: React.ReactElement<any>;
    
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
        <ChipComponent {...props} onDelete={props.delete ? (() => console.log): undefined} />
    )
}
