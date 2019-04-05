import * as React from 'react';
import TooltipComponent from '@material-ui/core/Tooltip';

export interface TooltipProps {

    /**
     * @name Title
     * @group Tooltip
     * */
    title: React.ReactNode;

    /**
     * @name Open
     * @group Tooltip
     * @description If true, the tooltip is shown.
     * */
    open?: boolean;

    /**
     * @name Interactive
     * @group Tooltip
     * @description Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip before the leaveDelay is expired.
     * */
    interactive?: boolean;

    /**
     * @name Placement
     * @group Tooltip
     * */
    placement: TooltipPlacement;

    /**
     * @name Disable Focus Listener
     * @group Listener
     * */
    disableFocusListener?: boolean;

    /**
     * @name Disable Hover Listener
     * @group Listener
     * */
    disableHoverListener?: boolean;

    /**
     * @name Disable Touch Listener
     * @group Listener
     * */
    disableTouchListener?: boolean;

    /**
     * @name Enter Delay
     * @group Delay
     * */
    enterDelay?: number;

    /**
     * @name Enter Touch Delay
     * @group Delay
     * */
    enterTouchDelay?: number;

    /**
     * @name Leave Delay
     * @group Delay
    */
    leaveDelay?: number;

    /**
     * @name Leave Touch Delay
     * @group Delay
     * */
    leaveTouchDelay?: number;

    /**
     * @name On Open
     * @description Callback fired when the tooltip requests to be open.
     * */
    onOpen?: (event: React.ChangeEvent<{}>) => void;

    /**
     * @name On Close
     * @description Callback fired when the tooltip requests to be closed.
     * 
    */
    onClose?: (event: React.ChangeEvent<{}>) => void;

    children: React.ReactElement<any>;
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
        <TooltipComponent {...props}>
            {props.children}
        </TooltipComponent>
    )
}
