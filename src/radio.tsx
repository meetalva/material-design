import * as React from 'react';
import FormComponent from '@material-ui/core/FormControlLabel';
import RadioComponent from '@material-ui/core/Radio';
import { LabelPlacement } from './types';

export interface RadioProps {
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
 * @name Radio
 * @description Radio Buttons allow the selection of a single option from a set
 * @icon Disc
 */
export const Radio: React.SFC<RadioProps> = props => {
    return (
        <FormComponent {...props} control={<RadioComponent />} />
    )
}
