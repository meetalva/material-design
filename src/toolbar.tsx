import * as React from 'react';
import ToolbarComponent from '@material-ui/core/Toolbar';

export interface ToolbarProps {
    /** @name Variant */
    variant?: ToolbarVariant;

    /** @name Disable Gutters */
    disableGutters?: boolean;
}

export enum ToolbarVariant {
    Regular = 'regular',
    Dense = 'dense'
}

/**
 * @name Toolbar
 * @group Navigation
 * 
 */
export const Toolbar: React.SFC<ToolbarProps> = props => {
    return (
        <ToolbarComponent {...props}>
            {props.children}
        </ToolbarComponent>
    )
}
