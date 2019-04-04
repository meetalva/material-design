import * as React from 'react';
import FilledInputComponent from '@material-ui/core/FilledInput';
import { InputBaseProps } from './input';
import { StandardProps } from './types';

export interface FilledInputProps extends StandardProps<InputBaseProps> {
    /** @name Disable Underline */
    disableUnderline?: boolean;
}

/**
 * @name Filled Input
 * @group Input
 */
export const FilledInput: React.SFC<FilledInputProps> = props => {
    return (
        <FilledInputComponent {...props}>
            {props.children}
        </FilledInputComponent>
    )
}
