import * as React from 'react';
import ButtonComponent, { ButtonProps } from '@material-ui/core/Button';

export const Button: React.SFC<ButtonProps> = props => {
    return (
        <ButtonComponent>
            {props.children}
        </ButtonComponent>
    )
}
