import * as React from 'react';
import TabsComponent from '@material-ui/core/Tabs';
import TabItemComponent from '@material-ui/core/Tab';
import { Color } from './types';

export interface TabsProps {
    /** @name Value @default 0 */
    value: number;

    /** @name Indicator Color */
    indicatorColor?: TabsIndicatorColor;

    /** @name Text Color @default Inherit */
    textColor: Color;

    /** @name Centered */
    centered?: boolean;

    /** @name Full Width @default true */
    fullWidth?: boolean;

    /** @name Variant */
    variant?: TabsVariant;
}

export enum TabsVariant {
    Standard = 'standard',
    Scrollable = 'scrollable',
    FullWidth = 'fullWidth'
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
            <TabItemComponent label="default test" />
        </TabsComponent>
    )
}


/**
 * @name Tab Item
 */
export const TabItem: React.SFC<TabItemProps> = props => {
    return (
        <TabItemComponent {...props} />
    )
}
