
import * as React from 'react';
import SelectComponent from '@material-ui/core/Select';
import { InputVariant } from './types';

export interface SelectProps {
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

    /** @name On Close */
    onClose?: (event: React.ChangeEvent<{}>) => void;

    /** @name On Open */
    onOpen?: (event: React.ChangeEvent<{}>) => void;

    /** @name Value */
    value?: Array<string | number | boolean | object> | string | number | boolean | object;
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
