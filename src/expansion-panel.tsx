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
     * @default true
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
    * import { ExpansionPanelSummary, ExpansionPanelDetails } from './';
    * 
    * export default () => (
    * <>
    *   <ExpansionPanelSummary />
    *   <ExpansionPanelDetails />
    * <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface ExpansionPanelSummaryProps extends StandardProps<ButtonBaseProps> {

    /**
     * @name Expand Icon
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Icon } from './icon';
     * 
     * export default () => (
     *   <Icon icon="ExpandMore" />
     * );
     * ```
     */
    expandIcon?: React.ReactNode;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Typography } from './';
    * 
    * export default () => (
    *   <Typography variant="subtitle1" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface ExpansionPanelDetailsProps {

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Typography } from './';
    * 
    * export default () => (
    *   <Typography variant="body1" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface ExpansionPanelActionsProps {

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Button } from './';
    * 
    * export default () => (
    *   <Button variant="text" />
    * );
    * ```
    **/
    children?: React.ReactNode;
}

/**
 * @name Expansion Panel
 * @description Contain creation flows and allow lightweight editing of an element
 * @group Expansion Panel
 * @icon CreditCard
 * @ignore
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
 * @icon Square
 * @ignore
 */
export const ExpansionPanelActions: React.SFC<ExpansionPanelActionsProps> = props => {
    return (
        <ExpansionPanelActionsComponent {...props}>
            {props.children}
        </ExpansionPanelActionsComponent>
    )
}

/**
 * @name Expansion Panel Details
 * @group Expansion Panel
 * @icon Square
 * @ignore
 */
export const ExpansionPanelDetails: React.SFC<ExpansionPanelDetailsProps> = props => {
    return (
        <ExpansionPanelDetailsComponent {...props}>
            {props.children}
        </ExpansionPanelDetailsComponent>
    )
}

/**
 * @name Expansion Panel Summary
 * @group Expansion Panel
 * @icon Square
 * @ignore
 */
export const ExpansionPanelSummary: React.SFC<ExpansionPanelSummaryProps> = props => {
    return (
        <ExpansionPanelSummaryComponent {...props}>
            {props.children}
        </ExpansionPanelSummaryComponent>
    )
}
