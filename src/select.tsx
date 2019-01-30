
import * as React from 'react';
import SelectComponent from '@material-ui/core/Select';
import { InputVariant } from './types';

export interface SelectProps {
    value?: string;
    autoWidth?: boolean;
    displayEmpty?: boolean;
    native?: boolean;
    open?: boolean;
    variant?: InputVariant;
}

/**
 * @name Select
 * @description Used for collecting user provided information from a list of options.
 */

export const Select: React.SFC<SelectProps> = props => {
    return (
        <SelectComponent {...props}>
            {props.children}
        </SelectComponent>
    )
}
