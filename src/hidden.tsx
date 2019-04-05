import * as React from 'react';
import HiddenComponent from '@material-ui/core/Hidden';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export interface HiddenProps {
    /** @name Implementation @description */
    implementation?: HiddenImplementation;

    /** @name Initial Width */
    initialWidth?: Breakpoint;

    /** @name Large Down */
    lgDown?: boolean;

    /** @name Large Up */
    lgUp?: boolean;

    /** @name Medium Down */
    mdDown?: boolean;

    /** @name Medium Up */
    mdUp?: boolean;

    /** @name Only */
    only?: Breakpoint | Breakpoint[];

    /** @name Small Down */
    smDown?: boolean;

    /** @name Small Up */
    smUp?: boolean;

    /** @name XLarge Down */
    xlDown?: boolean;

    /** @name XLarge Up */
    xlUp?: boolean;

    /** @name XSmall Down */
    xsDown?: boolean;

    /** @name XSMall Up */
    xsUp?: boolean;
}

export enum HiddenImplementation {
    JS = 'js',
    CSS = 'css'
}

/**
 * @name Hidden
 * @group Layout
 */
export const Hidden: React.SFC<HiddenProps> = props => {
    return (
        <HiddenComponent {...props}>
            {props.children}
        </HiddenComponent>
    )
}
