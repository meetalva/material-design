
import * as React from 'react';
import TextFieldComponent from '@material-ui/core/TextField';
import { InputVariant } from './types';

export interface TextFieldProps {
    /** @name Label @default Label */
    label?: string;

    /** @name Value */
    value?: string;

    /** @name Placeholder Text */
    placeholder?: string;

    /** @name Helper Text */
    helperText?: string;

    /** @name Multiline */
    multiline?: boolean;

    /** @name Autofocus */
    autoFocus?: boolean;

    /** @name Required */
    required?: boolean;

    /** @name Full Width */
    fullWidth?: boolean;

    /** @name Variant @default Filled */
    variant: InputVariant;

    /** @name Disabled @group State */
    disabled?: boolean;

    /** @name Error @group State */
    error?: boolean;
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
