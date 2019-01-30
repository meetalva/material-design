import * as React from 'react';
import FilledInputComponent from '@material-ui/core/FilledInput';

export interface FilledInputProps {
    /** @name Disable Underline */
    disableUnderline?: boolean;
}

/**
 * @name Filled Input
 */
export const FilledInput: React.SFC<FilledInputProps> = props => {
    return (
        <FilledInputComponent {...props}>
            {props.children}
        </FilledInputComponent>
    )
}
