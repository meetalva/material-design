import * as React from 'react';
import ButtonComponent from '@material-ui/core/Button';
import IconButtonComponent from '@material-ui/core/IconButton';
import { ColorWithInherit, StandardProps } from './types';

export interface ButtonProps extends StandardProps<ButtonBaseProps> {


    /**
     * @name Color
     * @default Primary
     * @group Style
     * */
    color?: ColorWithInherit;

    /**
     * @name Variant
     * @default Contained
     * @group Style
     * */
    variant?: ButtonVariant;

    /**
     * @name Size
     * @default Medium
     * @group Style
     * @control ButtonGroup
     * */
    size?: ButtonSize;

    /**
     * @name Full Width
     * @group Style
     * */
    fullWidth?: boolean;

    /**
     * @name Mini
     * @description If true, and variant is 'fab', will use mini floating action button styling.
     * @group Style
     * */
    mini?: boolean;

    /**
     * @name Disabled
     * @group Disabled
     * */
    disabled?: boolean;

    /**
     * @name Disable Ripple
     * @group Ripple
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
    * <Text text="Call to action" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface ButtonBaseProps {
    /**
     * @name Disable Ripple
     * @group Ripple
     * */
    disableRipple?: boolean;
}

export interface IconButtonProps extends StandardProps<ButtonBaseProps> {
    /** @name Color */
    color?: ColorWithInherit;

    /**
     * @name Disabled
     * @group Disabled
     * */
    disabled?: boolean;

    /**
     * @name Disable Ripple
     * @group Ripple
     * */
    disableRipple?: boolean;
}

export enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export enum ButtonVariant {
    Text = 'text',
    Outlined = 'outlined',
    Contained = 'contained',
    Fab = 'fab',
    ExtendedFab = 'extendedFab'
}

/**
 * @name Button
 * @description Allow users to take actions and make choices, with a single tap
 * @icon MinusSquare
 * @group Buttons
 */
export const Button: React.SFC<ButtonProps> = props => {
    return (
        <ButtonComponent {...props}>
            {props.children}
        </ButtonComponent>
    )
}

/**
 * @name Icon Button
 * @group Buttons
 * @icon Circle
 * @description Nest icon from an icon package
 */
export const IconButton: React.SFC<IconButtonProps> = props => {
    return (
        <IconButtonComponent {...props}>
            {props.children}
        </IconButtonComponent>
    )
}
