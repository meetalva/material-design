import * as React from 'react';
import SnackbarComponent from '@material-ui/core/Snackbar';
import SnackbarContentComponent from '@material-ui/core/SnackbarContent';
import { StandardProps } from './types';
import { PaperProps } from './paper';

export interface SnackbarProps {
    /**
     * @name Open
     * @group Snackbar
     * @default true
     * */
    open: boolean;

    /**
     * @name Position
     * @group Snackbar
     * @default Bottom
     * @control ButtonGroup
     */
    anchorOriginVertical: SnackbarOriginVertical;

    /**
     * @name On Close
     * @description Callback fired when the component requests to be closed.
     * */
    onClose?: (event: React.SyntheticEvent<any>, reason: string) => void;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Button } from './button';
     * 
     * export default () => <Button />
     * ```
     */
    action?: React.ReactNode;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * export default () => <Text text="This is a message!" />
     * ```
     */
     message?: React.ReactNode;
}

export interface SnackbarContentProps extends StandardProps<PaperProps> {
    
    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Button } from './button';
     * 
     * export default () => <Button />
     * ```
     */
    action?: React.ReactNode;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * export default () => <Text text="This is a message!" />
     * ```
     */
     message?: React.ReactNode;
}

export enum SnackbarOriginVertical {
    Top = 'top',
    Bottom = 'bottom',
}

/**
 * @name Snackbar
 * @group Snackbar
 * @description Brief messages about app processes
 * @icon MessageSquare
 */
export const Snackbar: React.SFC<SnackbarProps> = props => {
    return (
        <SnackbarComponent {...props} anchorOrigin={{
            horizontal: 'center',
            vertical: props.anchorOriginVertical
        }}>
            {props.children}
        </SnackbarComponent>
    )
}

/**
 * @name Snackbar Content
 * @description Always shows the message
 * @group Snackbar
 * @icon Info
 */
export const SnackbarContent: React.SFC<SnackbarContentProps> = props => {
    return (
        <SnackbarContentComponent {...props}>
            {props.children}
        </SnackbarContentComponent>
    )
}

