import * as React from 'react';
import FormComponent from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import { LabelPlacement } from './types';

export interface SelectionControlProps {
    /** @name Type @default Switch */
    type: SelectionControlType;

    /** @name Label @default Label */
    label: string;

    /** @name Checked */
    checked?: boolean;

    /** @name Disabled */
    disabled?: boolean;

    /** @name Label Position @default End */
    labelPlacement?: LabelPlacement;
}

export enum SelectionControlType {
    Checkbox,
    RadioButton,
    Switch
}

/**
 * @name Selection Control
 * @description Allow the user to select options
 * @icon ToggleLeft
 */
export const SelectionControl: React.SFC<SelectionControlProps> = props => {
    return (
        <FormComponent {...props} control={getType(props.type)} />
    )
}

function getType(type: SelectionControlType): JSX.Element {
	switch (type) {
        case SelectionControlType.Checkbox:
            return <Checkbox />;
        case SelectionControlType.RadioButton:
            return <Radio />;
        case SelectionControlType.Switch:
            return <Switch />;
	}
}
