
import * as React from 'react';
import TextFieldComponent from '@material-ui/core/TextField';
import { Margin } from './types';

export interface TextFieldProps {

    /**
     * @name Placeholder Text
     * @group Text Field
     * */
    placeholder?: string;

    /**
     * @name Value
     * @description Required for a controlled component.
     * @group Text Field
     * */
    value?: string;

    /**
     * @name Required
     * @group Text Field
     * */
    required?: boolean;

     /**
     * @name Select
     * @description Render a Select element
     * @group Type
     * */
    select?: boolean;

    /**
     * @name HTMl5 Type
     * @group Type
     * */
    type?: string;

    /**
     * @name Multiline
     * @group Type
     * @description If true, a textarea element will be rendered instead of an input.
     * */
    multiline?: boolean;

    /**
     * @name Number of Rows
     * @group Type
     * */
    rows?: number;

    /**
     * @name Rows Max
     * @group Type
     * */
    rowsMax?: number;

    /**
     * @name Full Width
     * @group Style
     * */
    fullWidth?: boolean;

    /**
     * @name Margin
     * @group Style
     * @control ButtonGroup
     * */
    margin?: Margin;

    /**
     * @name Disabled
     * @group State 
     * */
    disabled?: boolean;

    /**
     * @name Error
     * @group State 
     * */
    error?: boolean;


    /**
     * @name On Change
     * */
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

    /** @name Label @default Label */
    label?: React.ReactNode;

    /** @name Helper Text */
    helperText?: React.ReactNode;

}

/**
 * @name Text field
 * @description Let users enter and edit text
 * @group Input
 * @icon MessageSquare
 */
export const TextField: React.SFC<TextFieldProps> = props => {
    return (
        <TextFieldComponent {...props} />
    )
}