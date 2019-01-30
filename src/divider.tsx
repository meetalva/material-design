import * as React from 'react';
import DividerComponent from '@material-ui/core/Divider';

export interface DividerProps {
    /** @name Absolute */
    absolute?: boolean;
    
    /** @name Inset */
    inset?: boolean;

    /** @name Light */
    light?: boolean;

    /** @name Variant */
    variant?: DividerVariant;

    children: never;
}

export enum DividerVariant {
    FullWidth = 'fullWidth',
    Inset = 'inset',
    Middle = 'middle'
}

/**
 * @name Divider
 */
export const Divider: React.SFC<DividerProps> = props => {
    return (
        <DividerComponent {...props} />
    )
}
