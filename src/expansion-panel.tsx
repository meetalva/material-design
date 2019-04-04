import * as React from 'react';
import ExpansionPanelComponent from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActionsComponent from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetailsComponent from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummaryComponent from '@material-ui/core/ExpansionPanelSummary';
import { PaperProps } from './paper';
import { ButtonBaseProps } from './button';
import { StandardProps } from './types';

export interface ExpansionPanelProps extends StandardProps<PaperProps> {

    /**
     * @name Default Expanded
     * @group Expansion Panel
     * */
    defaultExpanded?: boolean;

    /**
     * @name Disabled
     * @group Expansion Panel
     * */
    disabled?: boolean;

    /**
     * @name Expanded
     * @group Expansion Panel
     * */
    expanded?: boolean;

    /**
     * @name On Change
     * @description Callback fired when the expand/collapse state is changed.
     * */
    onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void;


        /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import {  } from './';
    * import { Text, Box } from '@meetalva/essentials';
    * 
    * export default () => (
    * <>
    *   <ExpansionPanelSummary>
    *      <Typography variant="headline3"><Text text="Expansion Panel 1" /></Typography>
    *    </ExpansionPanelSummary>
    *    <ExpansionPanelDetails>
    *      <Typography>
    *        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    *        sit amet blandit leo lobortis eget.">
    *      </Typography>
    *    </ExpansionPanelDetails>
    * <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface ExpansionPanelSummaryProps extends StandardProps<ButtonBaseProps> {

    /**
     * @name Disabled
     * @group Expansion Panel Summary
     * */
    disabled?: boolean;

    /**
     * @name Expanded
     * @group Expansion Panel Summary
     * */
    expanded?: boolean;

    /** @name Expand Icon */
    expandIcon?: React.ReactNode;

    /** @name On Change */
    onChange?: React.ReactEventHandler<{}>;
}

export interface ExpansionPanelDetailsProps {

}

/**
 * @name Expansion Panel
 * @description Contain creation flows and allow lightweight editing of an element
 * @group Expansion Panel
 */
export const ExpansionPanel: React.SFC<ExpansionPanelProps> = props => {
    return (
        <ExpansionPanelComponent {...props}>
            {props.children}
        </ExpansionPanelComponent>
    )
}

/**
 * @name Expansion Panel Actions
 * @group Expansion Panel
 */
export const ExpansionPanelActions: React.SFC = props => {
    return (
        <ExpansionPanelActionsComponent {...props}>
            {props.children}
        </ExpansionPanelActionsComponent>
    )
}

/**
 * @name Expansion Panel Details
 * @group Expansion Panel
 */
export const ExpansionPanelDetails: React.SFC = props => {
    return (
        <ExpansionPanelDetailsComponent {...props}>
            {props.children}
        </ExpansionPanelDetailsComponent>
    )
}

/**
 * @name Expansion Panel Summary
 * @group Expansion Panel
 */
export const ExpansionPanelSummary: React.SFC<ExpansionPanelSummaryProps> = props => {
    return (
        <ExpansionPanelSummaryComponent {...props}>
            {props.children}
        </ExpansionPanelSummaryComponent>
    )
}
