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
    value: number;

    /** 
     * @name Indicator Color 
     * @default Primary
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
     * @default Standard
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
    * import { TabItem } from './tab';
    * 
    * export default () => (
    * <>
    *   <TabItem icon={<Icon icon="Home" />} />
    *   <TabItem icon={<Icon icon="Favorite" />}/>
    *   <TabItem icon={<Icon icon="Person" />}/>
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


    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * 
     * export default () => <Text text="Tab Item" />
     * ```
     */
    label?: React.ReactNode;

    /**
     * @name Icon
     */
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
