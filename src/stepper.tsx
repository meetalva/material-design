import * as React from 'react';
import StepperComponent from '@material-ui/core/Stepper';
import StepperItemComponent from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


export interface StepperProps {
    children: React.ReactNode;
    orientation?: StepperOrientation;
}

export interface StepperItemProps {
    /** @name Number @default 1 */
    index?: number;

    /** @name Label @default Step */
    label?: string;

    /** @name Altenative Label @default true */
    alternativeLabel?: boolean;

    /** @name Active @group State */
    active?: boolean;

    /** @name Completed @group State */
    completed?: boolean;

    /** @name Disabled @group State */
    disabled?: boolean;
}

export enum StepperOrientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}

/**
 * @name Stepper
 * @description Convey progress through numbered steps
 * @icon MoreHorizontal
 */
export const Stepper: React.SFC<StepperProps> = props => {
    return (
        <StepperComponent {...props}>
            {props.children}
        </StepperComponent>
    )
}

/**
 * @name Stepper Item
 * @icon MoreHorizontal
 */
export const StepperItem: React.SFC<StepperItemProps> = props => {
    return (
        <StepperItemComponent {...props}>
            <StepLabel {...props}>{props.label}</StepLabel>
        </StepperItemComponent>
    )
}
