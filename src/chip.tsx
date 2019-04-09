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
     * @control ButtonGroup
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

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * 
     * export default () => <Text text="Alva" />
     * ```
     */
    label?: React.ReactElement<any>;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Avatar } from './avatar';
     * 
     * export default () => <Avatar />
     * ```
     */
    avatar?: React.ReactElement<any>;

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
 * @group Selection Controls
 */
export const Chip: React.SFC<ChipProps> = props => {
    return (
        <>
        <ChipComponent {...props} onDelete={props.delete ? (() => console.log): undefined} />
        </>
    )
}
