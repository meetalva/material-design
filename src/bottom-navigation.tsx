import * as React from 'react';
import BottomNavigationComponent from '@material-ui/core/BottomNavigation';
import BottomNavigationActionComponent from '@material-ui/core/BottomNavigationAction';
import { Style } from './types';

export interface BottomNavigationProps {   

}

export interface BottomNavigationActionProps {   
    /** @name Label @default Action */
    label?: string;

    /** @name Selected */
    selected?: boolean;

    /** @name Show Label @default true */
    showLabel?: boolean;

    /** @name On CLick */
    onClick?: React.ReactEventHandler<any>;
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
