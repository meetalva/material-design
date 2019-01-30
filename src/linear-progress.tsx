import * as React from 'react';
import LinearProgressComponent from '@material-ui/core/LinearProgress';

export interface LinearProgressProps {
    /** @name Color */
    color?: LinearProgressColor;

    /** @name Value */
    value?: number;

    /** @name Value Buffer */
    valueBuffer?: number;

    /** @name Variant */
    variant?: LinearProgressVariant;
}

export enum LinearProgressColor {
    Primary = 'primary',
    Secondary = 'secondary'
}

export enum LinearProgressVariant {
    Determinate = 'determinate',
    Indeterminate = 'indeterminate',
    Buffer = 'buffer',
    Query = 'query'
}

/**
 * @name Linear Progress
 */
export const LinearProgress: React.SFC<LinearProgressProps> = props => {
    return (
        <LinearProgressComponent {...props}>
            {props.children}
        </LinearProgressComponent>
    )
}
