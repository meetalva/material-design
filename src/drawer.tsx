import * as React from 'react';
import DrawerComponent from '@material-ui/core/Drawer';
import { ModalProps } from './modal';
import { StandardProps } from './types';

export interface DrawerProps extends StandardProps<ModalProps> {

    /**
     * @name Modal Props
     * @group Drawer
     * */
    ModalProps?: Partial<ModalProps>;

    /**
     * @name Anchor
     * @default Left
     * @control ButtonGroup
     * @group Drawer
     * */
    anchor?: DrawerAnchor;

    /**
     * @name Elevation
     * @default 16
     * @group Drawer
     * */
    elevation?: number;
    
    /**
     * @name Variant
     * @default Temporary
     * @group Drawer
     * */
    variant?: DrawerVariant;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text, Box } from '@meetalva/essentials';
    * 
    * export default () => (
    *   <Box width="200px">
    *       <Text text="This is a drawer modal" />
    *   </Box>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export enum DrawerAnchor {
    Left = 'left',
    Top = 'top',
    Right = 'right',
    Bottom ='bottom'
}

export enum DrawerVariant {
    Permanent = 'permanent',
    Persistent = 'persistent',
    Temporary = 'temporary'
}

/**
 * @name Drawer
 * @description Provide access to destinations in your app
 * @group Modals
 */
export const Drawer: React.SFC<DrawerProps> = props => {
    return (
        <DrawerComponent {...props}>
            {props.children}
        </DrawerComponent>
    )
}
