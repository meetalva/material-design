
import * as React from 'react';
import SelectComponent from '@material-ui/core/Select';
import { InputVariant, StandardProps } from './types';
import { InputProps } from './input';
import { MenuProps } from './menu';

export interface SelectProps extends StandardProps<InputProps, 'value' | 'onChange'> {
    /** @name Auto Width */
    autoWidth?: boolean;

    /** @name Display Empty */
    displayEmpty?: boolean;

    /** @name Open */
    open?: boolean;

    /** @name Variant */
    variant?: InputVariant;

    /** @name Icon Component */
    IconComponent?: React.ReactType;

    /** @name Input */
    input?: React.ReactNode;

    /** @name Multiple */
    multiple?: boolean;

    /** @name Native */
    native?: boolean;


    /** @name Menu Props */
    MenuProps?: Partial<MenuProps>;

    /**
     * @name On Change 
     * @description Callback fired when the value is changed.
     * */
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

/**
 * @name Select
 * @description Used for collecting user provided information from a list of options.
 * @group Selection Controls
 */

export const Select: React.SFC<SelectProps> = props => {
    return (
        <SelectComponent {...props}>
            {props.children}
        </SelectComponent>
    )
}
