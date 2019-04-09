import * as React from 'react';
import AppBarComponent from '@material-ui/core/AppBar';
import { ColorWithInherit, StandardProps } from './types';
import { PaperProps } from './paper';

export interface AppBarProps extends StandardProps<PaperProps> {

    /**
     * @name Position
     * @default Sticky
     * @group App Bar
     * */
    position?: AppBarPosition;

    /**
     * @name Color
     * @default Primary
     * @group App Bar
     * */
    color: ColorWithInherit;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Toolbar, IconButton, Typography, Button } from './';
    * import { Text, Box } from '@meetalva/essentials';
    * 
    * export default () => (
    * <Toolbar>
    *       <IconButton color="inherit">
    *       </IconButton>
    *       <Typography variant="h6" color="inherit">
    *       </Typography>
    *       <Box width="100%" flexDirection="row" justifyContent="flex-end">
    *           <Button color="inherit" variant="text" />
    *       </Box>
    *</Toolbar>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export enum AppBarPosition {
    Fixed = 'fixed',
    Absolute = 'absolute',
    Sticky = 'sticky',
    Static = 'static',
    Relative = 'relative'
}

/**
 * @name App Bar
 * @description Displays information and actions relating to the current screen
 * @icon CreditCard
 * @group Navigation
 */
export const AppBar: React.SFC<AppBarProps> = props => {
    return (
        <AppBarComponent {...props}>
            {props.children}
        </AppBarComponent>
    )
}
