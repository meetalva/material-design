import * as React from 'react';
import TypographyComponent from '@material-ui/core/Typography';
import { Style, TypographyAlign } from './types';

export interface TypographyProps {
    /** @name Color @default TextPrimary */
    color?: TypographyColor;

    /** @name Variant */
    variant?: Style;

    /** @name Align @default Left */
    align?: TypographyAlign;
    
    /** @name Gutter Bottom */
    gutterBottom?: boolean;

    /** @name Inline */
    inline?: boolean;

    /** @name No Wrap */
    noWrap?: boolean;

    /** @name Paragraph */
    paragraph?: boolean;
}

export enum TypographyColor {
    Primary = 'primary',
    Secondary = 'secondary',
    TextPrimary = 'textPrimary',
    TextSecondary = 'textSecondary',
    Error = 'error',
    Default = 'default',
    Inherit = 'inherit'
}

/**
 * @name Typography
 * @icon Type
 * @group Style
 */
export const Typography: React.SFC<TypographyProps> = props => {
    return (
        <TypographyComponent {...props}>
            {props.children}
        </TypographyComponent>
    )
}
