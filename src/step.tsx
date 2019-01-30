import * as React from 'react';
import StepperComponent from '@material-ui/core/Stepper';
import MobileStepperComponent from '@material-ui/core/MobileStepper';
import StepButtonComponent from '@material-ui/core/StepButton';
import StepComponent from '@material-ui/core/Step';
import StepConnectorComponent from '@material-ui/core/StepConnector';
import StepIconComponent from '@material-ui/core/StepIcon';
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

    children: React.ReactNode;
}

export interface MobileStepperProps {
    /** @name Active Step */
    activeStep?: number;

    /** @name Back Button */
    backButton: React.ReactElement<any>;

    /** @name Next Button */
    nextButton: React.ReactElement<any>;

    /** @name Position */
    position?: 'bottom' | 'top' | 'static';

    /** @name Steps */
    steps: number;

    /** @name Variant */
    variant?: MobileStepperVariant;
}

export interface StepProps {
    /** @name Disabled */
    disabled?: boolean;

    /** @name Active */
    active?: boolean;

    /** @name Alternative Label */
    alternativeLabel?: boolean;

    /** @name Completed */
    completed?: boolean;

    /** @name Index */
    index?: number;

    /** @name Last */
    last?: boolean;

    /** @name Orientation */
    orientation?: Orientation;

    children?: React.ReactNode;
}

export interface StepButtonProps {
    /** @name Active */
    active?: boolean;

    /** @name Alternative Label */
    alternativeLabel?: boolean;

    /** @name Completed */
    completed?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name  */
    icon?: React.ReactElement<any>;

    /** @name Last */
    last?: boolean;

    /** @name Optional */
    optional?: React.ReactNode;

    /** @name Orientation */
    orientation?: Orientation;
}

export interface StepConnectorProps {
    /** @name Active */
    active?: boolean;

    /** @name Alternative Label */
    alternativeLabel?: boolean;

    /** @name Completed */
    completed?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Index */
    index?: number;

    /** @name Orientation */
    orientation?: Orientation;
}

export interface StepLabelProps {
    /** @name Disabled */
    disabled?: boolean;

    /** @name Error */
    error?: boolean;

    /** @name Active */
    active?: boolean;

    /** @name Alternative Label */
    alternativeLabel?: boolean;

    children: React.ReactNode;

    /** @name Completed */
    completed?: boolean;
    
    /** @name Icon */
    icon?: React.ReactElement<any>;

    /** @name Last */
    last?: boolean;

    /** @name Optional */
    optional?: React.ReactNode;

    /** @name Orientation */
    orientation?: Orientation;

    /** @name Step Icon Component */
    StepIconComponent?: React.ReactType;
}

export interface StepIconProps {
    /** @name Active */
    active?: boolean;

    /** @name Completed */
    completed?: boolean;

    /** @name Error */
    error?: boolean;

    /** @name Icon */
    icon: React.ReactNode;
}

export interface StepContentProps {
    /** @name Active */
    active?: boolean;

    /** @name Alternative Label */
    alternativeLabel?: boolean;

    children: React.ReactNode;

    /** @name Completed */
    completed?: boolean;

    /** @name Last */
    last?: boolean;

    /** @name Optional */
    optional?: boolean;

    /** @name Orientation */
    orientation?: Orientation;
}

export enum MobileStepperVariant {
    Text = 'text',
    Dots = 'dots',
    Progress = 'progress' 
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

/**
 * @name Mobile Stepper
 * @group Step
 */
export const MobileStepper: React.SFC<MobileStepperProps> = props => {
    return (
        <MobileStepperComponent {...props}>
            {props.children}
        </MobileStepperComponent>
    )
}

/** 
 * @name Step
 * @group Step
 * */
export const Step: React.SFC<StepProps> = props => {
    return (
        <StepComponent {...props}>
            {props.children}
        </StepComponent>
    )
}

/** 
 * @name Step Button
 * @group Step
 * */
export const StepButton: React.SFC<StepButtonProps> = props => {
    return (
        <StepButtonComponent {...props}>
            {props.children}
        </StepButtonComponent>
    )
}

/** 
 * @name Step Connector
 * @group Step
 * */
export const StepConnector: React.SFC<StepConnectorProps> = props => {
    return (
        <StepConnectorComponent {...props}>
            {props.children}
        </StepConnectorComponent>
    )
}

/** 
 * @name Step Icon
 * @group Step
 * */
export const StepIcon: React.SFC<StepIconProps> = props => {
    return (
        <StepIconComponent {...props}>
            {props.children}
        </StepIconComponent>
    )
}

/** 
 * @name Step Content
 * @group Step
 * */
export const StepContent: React.SFC<StepContentProps> = props => {
    return (
        <StepContentComponent {...props}>
            {props.children}
        </StepContentComponent>
    )
}

/** 
 * @name Step Label
 * @group Step
 * */
export const StepLabel: React.SFC<StepLabelProps> = props => {
    return (
        <StepLabelComponent {...props}>
            {props.children}
        </StepLabelComponent>
    )
}
