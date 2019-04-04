import * as React from 'react';
import FabComponent from '@material-ui/core/Fab';
import { ColorWithInherit, StandardProps } from './types';
import { ButtonBaseProps } from './button';

export interface FabProps extends StandardProps<ButtonBaseProps> {

    /**
     * @name Color
     * @group Floating Action Button
     * */
    color?: ColorWithInherit;

    /**
     * @name Size
     * @group Floating Action Button
     * @control ButtonGroup
     * */
    size?: FabSize;

    /** 
     * @name Variant
     * @group Floating Action Button
     * @control ButtonGroup
     * */
    variant?: FabVariant;

    /**
     * @name Disabled
     * @group Disabled
     * */
    disabled?: boolean;

    /**
     * @name Disable Ripple
     * @group Disabled
     * */
    disableRipple?: boolean;

    /**
     * @name Interaction
     * @description Set an interaction that happens on Click.
     * */
    onClick?: React.MouseEventHandler<HTMLElement>;
    
    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    * <Text text="+" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export enum FabSize {
    S = 'small',
    M = 'medium',
    L = 'large'
}

export enum FabVariant {
    Round = 'round',
    Extended = 'extended'
}

/**
 * @name FAB
 * @group Buttons
 * @description Floating Action Button
 */
export const Fab: React.SFC<FabProps> = props => {
    return (
        <FabComponent {...props}>
            {props.children}
        </FabComponent>
    )
}
