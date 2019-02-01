import * as React from 'react';
import FormComponent from '@material-ui/core/FormControlLabel';
import { LabelPlacement } from './types';

export interface SelectionControlProps {
    /** @name Label @default Label */
    label: React.ReactNode;

    /** @name Checked */
    checked?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Label Position @default End */
    labelPlacement?: LabelPlacement;

    /** @name Control */
    control: React.ReactElement<any>;

    /** @name Input Ref */
    inputRef?: React.Ref<any>;

    /** @name Name */
    name?: string;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;

    /** @name Value */
    value?: string;
}

/**
 * @name Selection Control
 * @description Allow the user to select options
 * @icon ToggleLeft
 */
export const SelectionControl: React.SFC<SelectionControlProps> = props => {
    return (
        <FormComponent {...props} />
    )
}
