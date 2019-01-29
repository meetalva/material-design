import * as React from 'react';
import BottomNavigationComponent from '@material-ui/core/BottomNavigation';
import BottomNavigationActionComponent from '@material-ui/core/BottomNavigationAction';

export interface BottomNavigationProps {
    /** @name Selected @description Set the selected item. 0 for the first, 1 for the second, etc @default 0 @group Active Item */
    value?: number;

    /** @name Show Labels @default true @group Style */  
    showLabels?: boolean;
}

export interface BottomNavigationActionProps {   
    /** @name Label @default Action */
    label?: string;
}

/**
 * @name Bottom Navigation
 */
export const BottomNavigation: React.SFC<BottomNavigationProps> = props => {
    return (
        <BottomNavigationComponent {...props}>
            {props.children}
        </BottomNavigationComponent>
    )
}


export const BottomNavigationAction: React.SFC<BottomNavigationActionProps> = props => {
    return (
        <BottomNavigationActionComponent {...props} />
    )
}
