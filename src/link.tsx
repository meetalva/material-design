import * as React from 'react';
import LinkComponent from '@material-ui/core/Link';
import { TypographyProps } from './typography';
import { StandardProps, ColorWithInherit } from './types';


export interface LinkProps extends StandardProps<TypographyProps, 'color'> {
    /** @name Block */
    block?: boolean;

    /** @name Color */
    color?: ColorWithInherit;

    /** @name Underline @default Hover */
    underline?: LinkUnderline;
}

export enum LinkUnderline {
    None = 'none',
    Hover = 'hover',
    Always = 'always'
}

/**
 * @name Link
 * @group Style
 * @ignore 
 */
export const Link: React.SFC<LinkProps> = props => {
    return (
        <LinkComponent {...props}>
            {props.children}
        </LinkComponent>
    )
}
