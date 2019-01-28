import * as React from 'react';
import TabsComponent from '@material-ui/core/Tabs';
import TabItemComponent from '@material-ui/core/Tab';
import { Color } from './types';

export interface TabsProps {
    /** @name Centered */
    centered?: boolean;

    /** @name Full Width @default true */
    fullWidth?: boolean;
}

export enum TabsIndicatorColor {
    Primary = 'primary',
    Secondary = 'secondary'
}
export interface TabItemProps {
    /** @name Label @default Tab */
    label?: string;

    /** @name Text Color @default Primary */
    textColor: Color;

    /** @name Selected */
    selected?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Full Width */
    fullWidth?: boolean;
}

/**
 * @name Tabs
 * @description Make it easy to explore and switch between different views
 */
export const Tabs: React.SFC<TabsProps> = props => {
    return (
        <TabsComponent value="" {...props}>
            {props.children}
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
