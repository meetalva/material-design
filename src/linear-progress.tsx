import * as React from 'react';
import LinearProgressComponent from '@material-ui/core/LinearProgress';

export interface LinearProgressProps {

    /**
     * @name Variant
     * @group Linear Progress
     * */
    variant?: LinearProgressVariant;

    /**
     * @name Value
     * @group Linear Progress
     * @description The progress value (1-100) for the determinate and buffer variants.
     * */
    value?: number;

    /**
     * @name Value Buffer
     * @group Linear Progress
     * @description The value (1-100) for the buffer variant.
     * */
    valueBuffer?: number;

     /**
     * @name Color
     * @group Style
     * @control ButtonGroup
     * */
    color?: LinearProgressColor;
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
 * @description Describes a loading progress
 * @group Progress indicators
 */
export const LinearProgress: React.SFC<LinearProgressProps> = props => {
    return (
        <LinearProgressComponent {...props}>
            {props.children}
        </LinearProgressComponent>
    )
}
