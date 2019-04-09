import * as React from 'react';
import Add from '@material-ui/icons/Add';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Favorite from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';
import Menu from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';

export interface IconProps {
    /**
     * @name Icon
     * @default Menu
     */
    icon: IconName;

    /**
     * @name Color
     * @default Inherit
     */
    color?: IconColor;
    
    /**
     * @name Font Size
     * @default Default
     */
    fontSize?: IconFontSize;
}

export enum IconColor {
    Inherit = 'inherit',
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default',
    Action = 'action',
    Disabled = 'disabled',
    Error = 'error'
}

export enum IconFontSize {
    Inherit = 'inherit',
    Default = 'default',
    Small = 'small',
    Large = 'large'
}

export enum IconName {
    Add = 'Add',
    ExpandMore = 'ExpandMore',
    Favorite = 'Favorite',
    Home = 'Home',
    Menu = 'Menu',
    Person = 'Person'
}

function getIcon(icon: IconName) {
    switch (icon) {
        case IconName.Add:
            return Add;
        case IconName.ExpandMore:
            return ExpandMore;
        case IconName.Favorite:
            return Favorite;
        case IconName.Home:
            return Home;
        case IconName.Menu:
            return Menu;
        case IconName.Person:
            return Person;
    }
}

/**
 * @name Icon
 * @group Style
 * @icon Heart
 */
export const Icon: React.SFC<IconProps> = props => {
    const IconComponent = getIcon(props.icon);

    return (
        <IconComponent {...props} />
    )
}
