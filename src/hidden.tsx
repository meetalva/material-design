import * as React from 'react';
import HiddenComponent from '@material-ui/core/Hidden';

export interface HiddenProps {


    /** @name Large Down */
    lgDown?: boolean;

    /** @name Large Up */
    lgUp?: boolean;

    /** @name Medium Down */
    mdDown?: boolean;

    /** @name Medium Up */
    mdUp?: boolean;

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

/**
 * @name Hidden
 * @group Layout
 * @ignore
 */
export const Hidden: React.SFC<HiddenProps> = props => {
    return (
        <HiddenComponent {...props}>
            {props.children}
        </HiddenComponent>
    )
}
