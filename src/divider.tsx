import * as React from 'react';
import DividerComponent from '@material-ui/core/Divider';

export interface DividerProps {
    /**
     * @name Absolute
     * @description Absolutely position the element
     * @group Divider
     * */
    absolute?: boolean;

    /**
     * @name Light
     * @description If true, the divider will have a lighter color.
     * @group Divider
     * */
    light?: boolean;

    /**
     * @name Variant
     * @control ButtonGroup
     * @group Divider
     * */
    variant?: DividerVariant;
}

export enum DividerVariant {
    FullWidth = 'fullWidth',
    Inset = 'inset',
    Middle = 'middle'
}

/**
 * @name Divider
 * @group Style
 * @description Separates content into clear groups.
 */
export const Divider: React.SFC<DividerProps> = props => {
    return (
        <DividerComponent {...props} />
    )
}
