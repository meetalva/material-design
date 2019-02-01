import * as React from 'react';
import ExpansionPanelComponent from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActionsComponent from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetailsComponent from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummaryComponent from '@material-ui/core/ExpansionPanelSummary';
import { PaperProps } from './paper';
import { ButtonBaseProps } from './button';
import { StandardProps } from './types';

export interface ExpansionPanelProps extends StandardProps<PaperProps> {
    /** @name Default Expanded */
    defaultExpanded?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Expanded */
    expanded?: boolean;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
}

export interface ExpansionPanelSummaryProps extends StandardProps<ButtonBaseProps> {
    /** @name Disabled */
    disabled?: boolean;

    /** @name Expanded */
    expanded?: boolean;

    /** @name Expand Icon */
    expandIcon?: React.ReactNode;

    /** @name On Change */
    onChange?: React.ReactEventHandler<{}>;
}

/**
 * @name Expension Panel
 * @description Contain creation flows and allow lightweight editing of an element
 * @group Expension Panel
 */
export const ExpansionPanel: React.SFC<ExpansionPanelProps> = props => {
    return (
        <ExpansionPanelComponent {...props}>
            {props.children}
        </ExpansionPanelComponent>
    )
}

/**
 * @name Expension Panel Actions
 * @group Expension Panel
 */
export const ExpensionPanelActions: React.SFC = props => {
    return (
        <ExpansionPanelActionsComponent {...props}>
            {props.children}
        </ExpansionPanelActionsComponent>
    )
}

/**
 * @name Expension Panel Details
 * @group Expension Panel
 */
export const ExpensionPanelDetails: React.SFC = props => {
    return (
        <ExpansionPanelDetailsComponent {...props}>
            {props.children}
        </ExpansionPanelDetailsComponent>
    )
}

/**
 * @name Expension Panel Summary
 * @group Expension Panel
 */
export const ExpensionPanelSummary: React.SFC<ExpansionPanelSummaryProps> = props => {
    return (
        <ExpansionPanelSummaryComponent {...props}>
            {props.children}
        </ExpansionPanelSummaryComponent>
    )
}
