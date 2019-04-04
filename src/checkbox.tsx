import * as React from 'react';
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
 * @group Form
 */
export const Checkbox: React.SFC<CheckboxProps> = props => {
    return (
        <CheckboxComponent {...props} />
    )
}
