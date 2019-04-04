import * as React from 'react';
import PaperComponent from '@material-ui/core/Paper';

export interface PaperProps {
    /** @name Elevation @default 2 @group Paper */
    elevation?: number;

    /** @name Square @description Do not show rounded corners @group Paper */
    square?: boolean;
}

/**
 * @name Paper
 * @description Physical properties of paper translated to the screen
 * @icon File
 * @group Style
 */
export const Paper: React.SFC<PaperProps> = props => {
    return (
        <PaperComponent {...props}>
            {props.children}
        </PaperComponent>
    )
}
