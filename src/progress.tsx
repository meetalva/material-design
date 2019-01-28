import * as React from 'react';
import CircularProgressComponent from '@material-ui/core/CircularProgress';
import { Color } from './types';

export interface ProgressProps {
    /** @name Color */
    color: Color;
}

/**
 * @name Progress
 * @description Express an unspecified wait time or display the length of a process
 * @icon RotateCw
 */
export const Progress: React.SFC<ProgressProps> = props => {
    return (
        <CircularProgressComponent {...props} />
    )
}
