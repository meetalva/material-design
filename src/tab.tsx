import * as React from 'react';
import TabsComponent from '@material-ui/core/Tabs';
import TabItemComponent from '@material-ui/core/Tab';
import { ColorWithInherit, StandardProps } from './types';
import { ButtonBaseProps } from './button';

export interface TabsProps extends StandardProps<ButtonBaseProps> {

    /** 
     * @name Selected 
     * @description Set the selected item. 0 for the first, 1 for the second, etc 
     * @default 0
     * @group Active Item 
     * */
    value: any;

    /** 
     * @name Indicator Color 
     * @default Secondary
     * @group Active Item 
     * @control ButtonGroup
     *  */
    indicatorColor?: TabsIndicatorColor;

    /** 
     * @name Text Color 
     * @default Inherit 
     * @group Active Item 
     * 
     * */
    textColor?: ColorWithInherit;

    /** 
     * @name Variant
     * @control ButtonGroup
     * @group Style
     *  */
    variant?: TabsVariant;
    
    /** 
     * @name Centered 
     * @default true
     * @group Style
     * */
    centered?: boolean;

    /** 
     * @name Full Width 
     * @group Style
     * */
    fullWidth?: boolean;
    
    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { TabItem } from './';
    * 
    * export default () => (
    * <>
    *   <TabItem />
    *   <TabItem />
    *   <TabItem />
    * <>
    * );
    * ```
    **/
    children?: React.ReactNode;
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

export interface TabItemProps extends StandardProps<ButtonBaseProps> {

    /** 
     * @name Disabled 
     * @group Tab
     * */
    disabled?: boolean;


     /** @name Label @default Tab */
    label?: React.ReactNode;

    /** @name Icon */
    icon?: React.ReactElement<any>;
}

export enum TabsColor {
    Primary = 'primary',
    Secondary = 'secondary',
    Inherit = 'inherit'
}

/**
 * @name Tabs
 * @description Allow navigation between groups of content
 * @group Tabs
 * @icon Sidebar
 */
export const Tabs: React.SFC<TabsProps> = props => {
    return (
        <TabsComponent {...props}>
            {props.children}
        </TabsComponent>
    )
}

/**
 * @name Tab
 * @group Tabs
 * @icon Square
 */
export const TabItem: React.SFC<TabItemProps> = props => {
    return (
        <TabItemComponent {...props} />
    )
}
