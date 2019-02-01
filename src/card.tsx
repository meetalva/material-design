import * as React from 'react';
import CardComponent from '@material-ui/core/Card';
import CardContentComponent from '@material-ui/core/CardContent';
import CardMediaComponent from '@material-ui/core/CardMedia';
import CardHeaderComponent from '@material-ui/core/CardHeader';
import CardActionAreaComponent from '@material-ui/core/CardActions';
import CardActionsComponent from '@material-ui/core/CardActions';
import { PaperProps } from './paper';
import { TypographyProps } from './typography';
import { StandardProps } from './types';

export interface CardProps extends StandardProps<PaperProps> {
    /** @name Raised */
    raised?: boolean;
}

export interface CardHeaderProps {
    /** @name Title @default Headline */
    title?: React.ReactNode;

    /** @name Subtitle @default Subtitle */
    subheader?: React.ReactNode;

    /** @name Action */
    action?: React.ReactNode;

    /** @name Avatar */
    avatar?: React.ReactNode;

    /** @name Disable Typography */
    disableTypography?: boolean;

    /** @name Subheader Typography Props */
    subheaderTypographyProps?: TypographyProps;

    /** @name Title Typography Props */
    titleTypographyProps?: TypographyProps;
}

export interface CardMediaProps {
    /** @name Image @default https://images.unsplash.com/photo-1542838775-961894306368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360 @asset */
    image?: string;

    /** @name Src */
    src?: string;

    /** @name Height @default 120px */
    height?: string;
}

export interface CardActionAreaProps {
    /** @name Disable Action Spacing */
    disableActionSpacing?: boolean;
}

export interface CardActionsProps {
    /** @name Disable Action Spacing */
    disableActionSpacing?: boolean;
}

/**
 * @name Card
 * @description Contain content and actions about a single subject
 * @icon Square
 * @group Card
 */
export const Card: React.SFC<CardProps> = props => {
    return (
        <CardComponent
            raised={props.raised}
        >
            {props.children}
        </CardComponent>
    )
}

/**
 * @name Card Header
 * @group Card
 */
export const CardHeader: React.SFC<CardHeaderProps> = props => {
    return (
        <CardHeaderComponent {...props} />
    )
}

/**
 * @name Card Content
 * @group Card
 */
export const CardContent: React.SFC = props => {
    return (
        <CardContentComponent>
            {props.children}
        </CardContentComponent>
    )
}

/**
 * @name Card Media
 * @group Card
 */
export const CardMedia: React.SFC<CardMediaProps> = props => {
    return (
        <CardMediaComponent {...props} style={{
            height: props.height
        }} />
    )
}

/**
 * @name Card Actions
 * @group Card
 */
export const CardActionArea: React.SFC<CardActionAreaProps> = props => {
    return (
        <CardActionAreaComponent {...props}>
            {props.children}
        </CardActionAreaComponent>
    )
}

/**
 * @name Card Action Area
 * @group Card
 */
export const CardActions: React.SFC<CardActionsProps> = props => {
    return (
        <CardActionsComponent {...props}>
            {props.children}
        </CardActionsComponent>
    )
}
