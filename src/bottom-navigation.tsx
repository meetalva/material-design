import * as React from 'react';
import BottomNavigationComponent from '@material-ui/core/BottomNavigation';
import BottomNavigationActionComponent from '@material-ui/core/BottomNavigationAction';
import { ButtonBaseProps } from './button';
import { StandardProps } from './types';

export interface BottomNavigationProps {
    /**
     * @name Selected
     * @description Set the selected item. 0 for the first, 1 for the second, etc
     * @default 0
     * @group Active Item
     * */
    value?: number;

    /**
     * @name Show Labels
     * @default true
     * @group Styl
     *  */  
    showLabels?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { BottomNavigationAction } from './';
    * 
    * export default () => (
    *   <>
    *       <BottomNavigationAction label="Action 1"/>
    *       <BottomNavigationAction label="Action 2"/>
    *       <BottomNavigationAction label="Action 3"/>
    *   <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface BottomNavigationActionProps extends StandardProps<ButtonBaseProps> {   
    /** @name Label @default Action */
    label?: string;

    /** @name On Click */
    onClick?: React.ReactEventHandler<any>;

    /** @name Icon */
    icon?: React.ReactElement<any>;
}

/**
 * @name Bottom Navigation
 * @group Navigation
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
 * @group Navigation
 */
export const BottomNavigationAction: React.SFC<BottomNavigationActionProps> = props => {
    return (
        <BottomNavigationActionComponent {...props} />
    )
}
