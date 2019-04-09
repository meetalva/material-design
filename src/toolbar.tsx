import * as React from 'react';
import ToolbarComponent from '@material-ui/core/Toolbar';

export interface ToolbarProps {
    /** @name Variant */
    variant?: ToolbarVariant;

    /** @name Disable Gutters */
    disableGutters?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Icon, IconButton, Typography, Button } from './';
    * import { Text, Box } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <>
    *       <IconButton color="inherit"></IconButton>
    *       <Box flexGrow="1" flexDirection="horizontal" justifyContent="flex-start">
    *           <Typography variant="h6" color="inherit" />
    *       </Box>
    *       <Button color="inherit" variant="text" />
    *   </>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export enum ToolbarVariant {
    Regular = 'regular',
    Dense = 'dense'
}

/**
 * @name Toolbar
 * @group Navigation
 * @icon CreditCard
 * 
 */
export const Toolbar: React.SFC<ToolbarProps> = props => {
    return (
        <ToolbarComponent {...props}>
            {props.children}
        </ToolbarComponent>
    )
}
