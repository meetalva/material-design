import * as React from 'react';
import PaperComponent from '@material-ui/core/Paper';

export interface PaperProps {

    /**
     * @name Elevation
     * @default 2
     * @group Paper
     * */
    elevation?: number;
}

/**
 * @name Paper
 * @description Physical properties of paper translated to the screen
 * @icon File
 * @group Style
 * @ignore
 */
export const Paper: React.SFC<PaperProps> = props => {
    return (
        <PaperComponent {...props}>
            {props.children}
        </PaperComponent>
    )
}
