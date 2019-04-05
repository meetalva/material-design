export type StandardProps<C, Removals extends keyof C = never> = Omit<C, 'classes' | Removals>;
export type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

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
    Subtitle1 = 'subtitle1',
    Subtitle2 = 'subtitle2',
    Body1 = 'body1',
    Body2 = 'body2',
    Caption = 'caption',
    Button = 'button',
    Overline = 'overline',
    Display3 = 'display3',
    Display2 = 'display2',
    Display1 = 'display1',
    Headline = 'headline',
    Title = 'title',
    Subheading = 'subheading',
    Inherit = 'inherit'
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

export enum TypographyAlign {
    /** @name Left @icon AlignLeft */
    Left = 'left',
    /** @name Center @icon AlignCenter */
    Center = 'center',
    /** @name Right @icon AlignRight */
    Right = 'right',
    /** @name Justify @icon AlignJustify */
    Justify = 'justify',
    /** @name Inherit  */
    Inherit = 'inherit'
}
