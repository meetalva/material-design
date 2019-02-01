import * as React from 'react';
import CircularProgressComponent from '@material-ui/core/CircularProgress';

export interface ProgressProps {
    /** @name Color */
    color: ProgressColor;

    /** @name Disable Shrink */
    disableShrink?: boolean;

    /** @name Size */
    size?: number;

    /** @name Thickness */
    thickness?: number;

    /** @name Value */
    value?: number;

    /** @name Variant */
    variant?: ProgressVariant;
}

export enum ProgressVariant {
    Determinate = 'determinate',
    Indeterminate = 'indeterminate',
    Static = 'static'
}

export enum ProgressColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Inherit = 'inherit'
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
