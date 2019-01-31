
import * as React from 'react';
import TextFieldComponent from '@material-ui/core/TextField';
import { Margin } from './types';

export interface TextFieldProps {
    /** @name Label @default Label */
    label?: React.ReactNode;

    /** @name Placeholder Text */
    placeholder?: string;

    /** @name Helper Text */
    helperText?: React.ReactNode;

    /** @name Multiline */
    multiline?: boolean;

    /** @name Autofocus */
    autoFocus?: boolean;

    /** @name Required */
    required?: boolean;

    /** @name Full Width */
    fullWidth?: boolean;

    /** @name Disabled @group State */
    disabled?: boolean;

    /** @name Error @group State */
    error?: boolean;

    /** @name Auto Complete */
    autoComplete?: string;

    children?: React.ReactNode;

    /** @name Default Value */
    defaultValue?: string;

    /** @name ID */
    id?: string;

    /** @name Margin */
    margin?: Margin;

    /** @name Name */
    name?: string;

    /** @name On Change */
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

    /** @name Number */
    rows?: number;

    /** @name Rows Max */
    rowsMax?: number;

    /** @name Select */
    select?: boolean;

    /** @name Type */
    type?: string;

    /** @name Value */
    value?: Array<string | number | boolean> | string | number | boolean;
}

/**
 * @name TextField
 * @description Let users enter and edit text
 * @icon MessageSquare
 */
export const TextField: React.SFC<TextFieldProps> = props => {
    return (
        <TextFieldComponent {...props} />
    )
}
