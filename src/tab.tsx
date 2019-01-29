import * as React from 'react';
import TabsComponent from '@material-ui/core/Tabs';
import TabItemComponent from '@material-ui/core/Tab';
import { Color } from './types';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

export interface TabsProps {
    /** @name Selected @description Set the selected item. 0 for the first, 1 for the second, etc @default 0 @group Active Item */
    value: number;

    /** @name Indicator Color @default Secondary @group Active Item  */
    indicatorColor?: TabsIndicatorColor;

    /** @name Text Color @default Inherit @group Active Item */
    textColor?: Color;
    
    /** @name Centered @default true @group Style */
    centered?: boolean;

    /** @name Full Width @group Style */
    fullWidth?: boolean;

    /** @name Scrollable @group Style */
    scrollable?: boolean; 
}

export enum TabsIndicatorColor {
    Primary = 'primary',
    Secondary = 'secondary'
}

export interface TabItemProps {
    /** @name Label @default Tab */
    label?: string;

    /** @name Disabled */
    disabled?: boolean;
}

/**
 * @name Tabs
 * @description Make it easy to explore and switch between different views
 */
export const Tabs: React.SFC<TabsProps> = props => {
    return (
        <TabsComponent {...props}>
            {props.children}
        </TabsComponent>
    )
}


/**
 * @name Tab Item
 */
export const TabItem: React.SFC<TabItemProps> = props => {
    return (
        <TabItemComponent icon={<ShoppingBasket />} {...props} />
    )
}
