import * as React from 'react';
import CheckboxComponent from '@material-ui/core/Checkbox';
import { LabelPlacement } from './types';

export interface CheckboxProps {

    /**
     * @name Label
     * @default Label
     * @group Checkbox
     * */
    label: string;

    /** 
     * @name Color
     * @group Checkbox
     * @control ButtonGroup
     * */
    color?: Color;

    /**
     * @name Checked
     * @group Checkbox
     * */
    checked?: boolean;

    /**
     * @name Disabled
     * @group Checkbox
     * */
    disabled?: boolean;

    /**
     * @name Label Position
     * @default Start
     * @control ButtonGroup
     * @group Checkbox
     * */
    labelPlacement?: LabelPlacement;

    /**
     * @name On Change
     * @description Callback fired when the state is changed.
     * */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default'
}

/**
 * @name Checkbox
 * @description Allow the selection of multiple options from a set
 * @icon CheckSquare
 * @group Selection Controls
 * */
export const Checkbox: React.SFC<CheckboxProps> = props => {
    return (
        <CheckboxComponent {...props} />
    )
}
