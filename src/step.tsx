import * as React from 'react';
import StepperComponent from '@material-ui/core/Stepper';
import MobileStepperComponent from '@material-ui/core/MobileStepper';
import StepButtonComponent from '@material-ui/core/StepButton';
import StepComponent from '@material-ui/core/Step';
import StepConnectorComponent from '@material-ui/core/StepConnector';
import StepIconComponent from '@material-ui/core/StepIcon';
import StepContentComponent from '@material-ui/core/StepContent';
import StepLabelComponent from '@material-ui/core/StepLabel';
import { Orientation, StandardProps } from './types';
import { PaperProps } from './paper';
import { LinearProgressProps } from './linear-progress';
import { ButtonBaseProps } from './button';

export interface StepperProps extends StandardProps<PaperProps> {

    /**
     * @name Active Step
     * @description Set the selected item. 0 for the first, 1 for the second, etc
     * @default 0 
     * @group Stepper
     * */
    activeStep?: number;

    /** 
     * @name Orientation 
     * @default Horizontal 
     * @control ButtonGroup
     * @group Stepper
     * */
    orientation?: Orientation;

    /** 
     * @name Alt. Label 
     * @default false
     * @group Stepper
     * @description If set to 'true' and orientation is horizontal, then the step label will be positioned under the icon.
     * */
    alternativeLabel?: boolean;

    /** 
     * @name Non Linear 
     * @group Stepper
     * @description If set the Stepper will not assist in controlling steps for linear flow.
     * 
     * */
    nonLinear?: boolean;


    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Step } from './';
    * 
    * export default () => (
    * <>
    *   <Step />
    *   <Step />
    *   <Step />
    * <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface MobileStepperProps extends StandardProps<PaperProps> {
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

    LinearProgressProps?: Partial<LinearProgressProps>;
}

export interface StepProps {

    /** 
     * @name Disabled 
     * @group Step
     * @description Mark the step as disabled, will also disable the button if StepButton is a child of Step.
     * */
    disabled?: boolean;

    /** 
     * @name Active
     * @group Step
     * @description Sets the step as active.
     *  */
    active?: boolean;

    /** 
     * @name Completed
     * @group Step
     * @description Mark the step as completed.
     * */
    completed?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { StepButton } from './';
    * 
    * export default () => (
    * <StepButton />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface StepButtonProps extends StandardProps<ButtonBaseProps> {

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { StepLabel } from './';
    * 
    * export default () => (
    * <StepLabel />
    * );
    * ```
    **/
    children?: React.ReactNode;
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

    /** 
     * @name Disabled 
     * @description Mark the step as disabled, will also disable the button
     * */
    disabled?: boolean;

    /** 
     * @name Error 
     * @description Mark the step as failed.
     * */
    error?: boolean;

    /** @name Optional */
    optional?: React.ReactNode;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    * <Text text="Step Title" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface StepIconProps {

    /** 
     * @name Active 
     * @description Whether this step is active.
     * @group Step Icon
     * */
    active?: boolean;

    /** 
     * @name Completed 
     * @description Mark the step as completed.
     * @group Step Icon
     * */
    completed?: boolean;

    /** 
     * @name Error 
     * @description Mark the step as failed.
     * @group Step Icon
     * */
    error?: boolean;

    /** @name Icon */
    icon: React.ReactNode;
}

export interface StepContentProps {
    children: React.ReactNode;

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
 * @group Stepper
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
 * @group Stepper
 * @ignore
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
 * @group Stepper
 * @icon Square
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
 * @group Stepper
 * @icon MinusSquare
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
 * @group Stepper
 * @icon Minus
 * @ignore
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
 * @group Stepper
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
 * @group Stepper
 * @icon Square
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
 * @group Stepper
 * @icon Tag
 * */
export const StepLabel: React.SFC<StepLabelProps> = props => {
    return (
        <StepLabelComponent {...props}>
            {props.children}
        </StepLabelComponent>
    )
}
