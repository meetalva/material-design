import * as React from 'react';
import ChipComponent from '@material-ui/core/Chip';
import { ColorWithInherit } from './types';

export interface ChipProps {

    /**
     * @name Clickable
     * @group Chip
     * 
    */
    clickable?: boolean;

    /**
     * @name Color
     * @group Style
     * */
    color?: ColorWithInherit;

    /**
     * @name variant
     * @group Style
     * */
    variant?: ChipVariant;

    /**
     * @name Show Delete Icon
     * @group Style
     * */
    delete?: boolean;

    /**
     * @name Interaction
     * @description Set an interaction that happens "On Delete"
     * */
    onDelete?: React.EventHandler<any>;

    /** @name Label */
    label?: React.ReactElement<any>;

    /** @name Avatar */
    avatar?: React.ReactElement<any>;

    /** @name Delete Icon */
    deleteIcon?: React.ReactElement<any>;

    /** @name Icon */
    icon?: React.ReactElement<any>;  
    
    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * /*import {  } from './';
    * /*import {  } from '@meetalva/essentials';
    * 
    * export default () => (
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export enum ChipVariant {
    Default = 'default',
    Outlined = 'outlined'
}

/**
 * @name Chip
 * @description Compact elements that represent an input, attribute, or action
 * @icon ToggleLeft
 * @group Form
 */
export const Chip: React.SFC<ChipProps> = props => {
    return (
        <>
        {console.log(props.avatar)}
        <ChipComponent {...props} onDelete={props.delete ? (() => console.log): undefined} />
        </>
    )
}
