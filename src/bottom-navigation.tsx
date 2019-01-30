import * as React from 'react';
import BottomNavigationComponent from '@material-ui/core/BottomNavigation';
import BottomNavigationActionComponent from '@material-ui/core/BottomNavigationAction';

export interface BottomNavigationProps {
    /** @name Selected @description Set the selected item. 0 for the first, 1 for the second, etc @default 0 @group Active Item */
    value?: number;

    /** @name Show Labels @default true @group Style */  
    showLabels?: boolean;

    children: React.ReactNode;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}

export interface BottomNavigationActionProps {   
    /** @name Label @default Action */
    label?: string;

    /** @name On Click */
    onClick?: React.ReactEventHandler<any>;

    /** @name Selected */
    selected?: boolean;

    /** @name Show Label */
    showLabel?: boolean;

    /** @name Value */
    value?: any;

    /** @name Icon */
    icon?: string | React.ReactElement<any>;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
}

/**
 * @name Bottom Navigation
 * @group Bottom Navigation
 */
export const BottomNavigation: React.SFC<BottomNavigationProps> = props => {
    return (
        <BottomNavigationComponent {...props}>
            {props.children}
        </BottomNavigationComponent>
    )
}

/**
 * @name Bottom Navigation Action
 * @group Bottom Navigation
 */
export const BottomNavigationAction: React.SFC<BottomNavigationActionProps> = props => {
    return (
        <BottomNavigationActionComponent {...props} />
    )
}
