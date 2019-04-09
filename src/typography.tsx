import * as React from 'react';
import TypographyComponent from '@material-ui/core/Typography';
import { Style, TypographyAlign } from './types';

export interface TypographyProps {

    /**
     * @name Color
     * @default TextPrimary
     * @group Typography
     * */
    color?: TypographyColor;

    /**
     * @name Variant
     * @group Typography
     * */
    variant?: Style;

    /**
     * @name Align
     * @default Inherit
     * @control ButtonGroup
     * @group Typography
     * */
    align?: TypographyAlign;
    
    /**
     * @name Gutter Bottom
     * @group Display
     * */
    gutterBottom?: boolean;

    /**
     * @name Inline
     * @group Display
     * */
    inline?: boolean;

    /**
     * @name No Wrap
     * @group Display
     * */
    noWrap?: boolean;

    /**
     * @name Paragraph
     * @group Display
     * */
    paragraph?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    * <Text text="Lorem ipsum" />
    * );
    * ```
    **/
    children?: React.ReactNode;
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
