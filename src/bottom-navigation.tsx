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
    * import { BottomNavigationAction, Icon } from './';
    * 
    * export default () => (
    *   <>
    *       <BottomNavigationAction label="Home" icon={<Icon icon="Home" />} />
    *       <BottomNavigationAction label="Favorites" icon={<Icon icon="Favorite" />}/>
    *       <BottomNavigationAction label="Profile" icon={<Icon icon="Person" />}/>
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
 * @icon CreditCard
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
 * @icon MinusSquare
 */
export const BottomNavigationAction: React.SFC<BottomNavigationActionProps> = props => {
    return (
        <BottomNavigationActionComponent {...props} />
    )
}
