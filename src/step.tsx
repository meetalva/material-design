import * as React from 'react';
import StepperComponent from '@material-ui/core/Stepper';
import StepComponent from '@material-ui/core/Step';
import StepContentComponent from '@material-ui/core/StepContent';
import StepLabelComponent from '@material-ui/core/StepLabel';
import { Orientation } from './types';

export interface StepperProps {
    /** @name Active Step @description Set the selected item. 0 for the first, 1 for the second, etc @default 0 */
    activeStep?: number;

    /** @name Alternative Label */
    alternativeLabel?: boolean;

    /** @name Non Linear */
    nonLinear?: boolean;

    /** @name Orientation @default Horizontal */
    orientation?: Orientation;
}

export interface StepProps {
    /** @name label @default Step */
    label?: string;

    /** @name Disabled */
    disabled?: boolean;
}

export interface StepLabelProps {
    /** @name Disabled */
    disabled?: boolean;

    /** @name Error */
    error?: boolean;
}

/**
 * @name Stepper
 * @description Convey progress through numbered steps
 * @icon MoreHorizontal
 * @group Step
 */
export const Stepper: React.SFC<StepperProps> = props => {
    return (
        <StepperComponent {...props}>
            {props.children}
        </StepperComponent>
    )
}

/** @group Step */
export const Step: React.SFC<StepProps> = props => {
    return (
        <StepComponent {...props}>
            <StepLabelComponent>{props.label}</StepLabelComponent>
            <StepContentComponent>{props.children}</StepContentComponent>
        </StepComponent>
    )
}
