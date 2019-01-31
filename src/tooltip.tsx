import * as React from 'react';
import TooltipComponent from '@material-ui/core/Tooltip';

export interface TooltipProps {
    /** @name Title */
    title: string;

    /** @name Placement */
    placement: TooltipPlacement;

    /** @name Disable Focus Listener */
    disableFocusListener?: boolean;

    /** @name Disable Hover Listener */
    disableHoverListener?: boolean;

    /** @name Disable Touch Listener */
    disableTouchListener?: boolean;

    /** @name Enter Delay */
    enterDelay?: number;

    /** @name Enter Touch Delay */
    enterTouchDelay?: number;

    /** @name Interactive */
    interactive?: boolean;

    /** @name Leave Delay */
    leaveDelay?: number;

    /** @name Leave Touch Delay */
    leaveTouchDelay?: number;

    /** @name Open */
    open?: boolean;

    children: React.ReactNode;

    /** @name ID */
    id?: string;

    /** @name On Close */
    onClose?: (event: React.ChangeEvent<{}>) => void;

    /** @name On Open */
    onOpen?: (event: React.ChangeEvent<{}>) => void;
}

export enum TooltipPlacement {
    BottomEnd = 'bottom-end',
    BottomStart = 'bottom-start',
    Bottom = 'bottom',
    LeftEnd = 'left-end',
    LeftStart = 'left-start',
    Left = 'left',
    RightEnd =  'right-end',
    RightStart = 'right-start',
    Right = 'right',
    TopEnd = 'top-end',
    TopStart = 'top-start',
    Top = 'top'
}

/**
 * @name Tooltip
 * @description Display informative text when users hover over, focus on, or tap an element
 */
export const Tooltip: React.SFC<TooltipProps> = props => {
    return (
        <TooltipComponent className="helloWorld" {...props}>
            {props.children}
        </TooltipComponent>
    )
}
