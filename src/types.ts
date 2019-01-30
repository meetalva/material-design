export interface BaseProps {
    /** @name Width @group Style */
    width?: string;

    /** @name Height @group Style */
    height?: string;

    /** @name Margin @group Style */
    margin?: string;

    /** @name Color @group Style */
    color?: string;

    /** @name Background Color @group Style */
    backgroundColor?: string;
}

export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default',
}

export enum ColorWithInherit {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default',
    Inherit = 'inherit'
}

export enum ColorWithInheritAndError {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default',
    Error = 'error',
    Inherit = 'inherit'
}

export enum LabelPlacement {
    Start = 'start',
    End = 'end',
    Top = 'top',
    Bottom = 'bottom'
}

export enum Style {
    Headline1 = 'h1',
    Headline2 = 'h2',
    Headline3 = 'h3',
    Headline4 = 'h4',
    Headline5 = 'h5',
    Headline6 = 'h6',
    Default = 'body1'
}

export enum Orientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}

export enum InputVariant {
    Standard = 'standard',
    Filled = 'filled',
    Outlined = 'outlined'
}

export enum Margin {
    None = 'none',
    Dense = 'dense',
    Normal = 'normal'
}