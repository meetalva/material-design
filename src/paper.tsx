import * as React from 'react';
import PaperComponent from '@material-ui/core/Paper';
import { BaseProps } from './types';

export interface PaperProps extends BaseProps {
    /** @name Elevation @default 2 */
    elevation?: number;

    /** @name Square @description Do not show rounded corners */
    square?: boolean;
}

/**
 * @name Paper
 * @description Physical properties of paper translated to the screen
 * @icon File
 */
export const Paper: React.SFC<PaperProps> = props => {
    return (
        <PaperComponent {...props}>
            {props.children}
        </PaperComponent>
    )
}
