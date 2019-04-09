
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
     * @name HTML5 Type
     * @group Type
     * @default Text
     * */
    type?: TextFieldType;

    /**
     * @name Multiline
     * @group Multiline
     * @description If true, a textarea element will be rendered instead of an input.
     * */
    multiline?: boolean;

    /**
     * @name Number of Rows
     * @group Multiline
     * */
    rows?: number;

    /**
     * @name Rows Max
     * @group Multiline
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
     * @default None
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


    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * export default () => <Text text="Label" />
     * ```
     */
    label?: React.ReactNode;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * export default () => <Text text="This is a help text." />
     * ```
     */
    helperText?: React.ReactNode;

}

export enum TextFieldType {
    Date = 'date',
    Email = 'email',
    Number = 'number',
    Password = 'password',
    Range = 'range',
    Tel = 'tel',
    Text = 'text',
    Time = 'time'
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