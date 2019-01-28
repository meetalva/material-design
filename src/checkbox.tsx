import * as React from 'react';
import FormComponent from '@material-ui/core/FormControlLabel';
import CheckboxComponent from '@material-ui/core/Checkbox';
import { LabelPlacement } from './types';

export interface CheckboxProps {
    /** @name Label @default Label */
    label: string;

    /** @name Checked */
    checked?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Label Position @default End */
    labelPlacement?: LabelPlacement;
}

/**
 * @name Checkbox
 * @description Allow the selection of multiple options from a set
 * @icon CheckSquare
 */
export const Checkbox: React.SFC<CheckboxProps> = props => {
    return (
        <FormComponent {...props} control={<CheckboxComponent />} />
    )
}
