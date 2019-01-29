
import * as React from 'react';
import TextFieldComponent from '@material-ui/core/TextField';

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
    variant: TextFieldVariant;

    /** @name Disabled @group State */
    disabled?: boolean;

    /** @name Error @group State */
    error?: boolean;
}

export enum TextFieldVariant {
    Standard = 'standard',
    Filled = 'filled',
    Outlined = 'outlined'
}

/**
 * @name TextField
 * @description Inform users about a task and can contain critical information, require decisions, or involve multiple tasks
 */
export const TextField: React.SFC<TextFieldProps> = props => {
    return (
        <TextFieldComponent {...props} />
    )
}
