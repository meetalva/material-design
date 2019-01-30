import * as React from 'react';
import TooltipComponent from '@material-ui/core/Tooltip';

export interface TooltipProps {
    /** @name Title */
    title: string;

    /** @name Placement */
    placement: TooltipPlacement;

    /** @default hello */
    className: string;

    disableFocusListener?: boolean;
    disableHoverListener?: boolean;
    disableTouchListener?: boolean;
    enterDelay?: number;
    enterTouchDelay?: number;
    interactive?: boolean;
    leaveDelay?: number;
    leaveTouchDelay?: number;
    open?: boolean;
    children: React.ReactNode;
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
