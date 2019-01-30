import * as React from 'react';
import TabsComponent from '@material-ui/core/Tabs';
import TabItemComponent from '@material-ui/core/Tab';
import { ColorWithInherit } from './types';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

export interface TabsProps {
    /** @name Selected @description Set the selected item. 0 for the first, 1 for the second, etc @default 0 @group Active Item */
    value: any;

    /** @name Indicator Color @default Secondary @group Active Item  */
    indicatorColor?: TabsIndicatorColor;

    /** @name Text Color @default Inherit @group Active Item */
    textColor?: ColorWithInherit;
    
    /** @name Centered @default true @group Style */
    centered?: boolean;

    /** @name Full Width @group Style */
    fullWidth?: boolean;

    /** @name Scrollable @group Style */
    scrollable?: boolean; 

    children?: React.ReactNode;
    
    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{}>, value: any) => void;

    /** @name Scroll Buttons */
    scrollButtons?: TabsScrollButtons;

    /** @name Variant */
    variant?: TabsVariant;

    /** @name Width */
    width?: string;
}

export enum TabsIndicatorColor {
    Primary = 'primary',
    Secondary = 'secondary'
}

export enum TabsScrollButtons {
    Auto = 'auto',
    On = 'on',
    Off = 'off'
}

export enum TabsVariant {
    Standard = 'standard',
    Scrollable = 'scrollable',
    FullWidth = 'fullWidth'
}

export interface TabItemProps {
    /** @name Label @default Tab */
    label?: React.ReactNode;

    /** @name Disabled */
    disabled?: boolean;


    /** @name Full Width */
    fullWidth?: boolean;

    /** @name Icon */
    icon?: React.ReactElement<any>;

    /** @name Value */
    value?: any;

    /** @name On Change */
    onChange?: (event: React.ChangeEvent<{ checked: boolean }>, value: any) => void;

    /** @name On Click */
    onClick?: React.EventHandler<any>;

    /** @name Selected */
    selected?: boolean;

    /** @name Color */
    textColor?: TabsColor;
}

export enum TabsColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Inherit = 'inherit'
}

/**
 * @name Tabs
 * @description Make it easy to explore and switch between different views
 * @group Tabs
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
 * @group Tabs
 */
export const TabItem: React.SFC<TabItemProps> = props => {
    return (
        <TabItemComponent icon={<ShoppingBasket />} {...props} />
    )
}
