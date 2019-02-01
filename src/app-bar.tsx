import * as React from 'react';
import AppBarComponent from '@material-ui/core/AppBar';
import { ColorWithInherit, StandardProps } from './types';
import { PaperProps } from './paper';

export interface AppBarProps extends StandardProps<PaperProps> {
    /** @name Color @default Primary */
    color: ColorWithInherit;

    /** @name Position @default Sticky */
    position?: AppBarPosition;
}

export enum AppBarPosition {
    Fixed = 'fixed',
    Absolute = 'absolute',
    Sticky = 'sticky',
    Static = 'static',
    Relative = 'relative'
}

/**
 * @name App Bar
 * @description Displays information and actions relating to the current screen
 * @icon CreditCard
 */
export const AppBar: React.SFC<AppBarProps> = props => {
    return (
        <AppBarComponent {...props}>
            {props.children}
        </AppBarComponent>
    )
}
