import * as React from 'react';
import CardComponent from '@material-ui/core/Card';
import CardContentComponent from '@material-ui/core/CardContent';
import CardMediaComponent from '@material-ui/core/CardMedia';
import CardHeaderComponent from '@material-ui/core/CardHeader';
import CardActionAreaComponent from '@material-ui/core/CardActions';
import CardActionsComponent from '@material-ui/core/CardActions';
import { PaperProps } from './paper';
import { StandardProps } from './types';

export interface CardProps extends StandardProps<PaperProps> {

    /**
     * @name Raised
     * @description If true, the card will use raised styling.
     * @group Card
     * */
    raised?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { CardContent, CardHeader, CardMedia, CardActions } from './';
    * 
    * export default () => (
    * <>
    *   <CardHeader />
    *   <CardContent />
    *   <CardActions />
    * <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface CardHeaderProps {
    
    /**
     *
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * 
     * export default () => (
     * <Text text="Card Header Title" />
     * );
     * ```
     * */
    title?: React.ReactNode;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Text } from '@meetalva/essentials';
     * 
     * export default () => (
     * <Text text="Sub Header" />
     * );
     * ```
     * */
    subheader?: React.ReactNode;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { IconButton } from './button';
     * 
     * export default () => (
     * <IconButton />
     * );
     * ```
     * */
    action?: React.ReactNode;

    /**
     * @default
     * ```tsx
     * import * as React from 'react';
     * import { Avatar } from './avatar';
     * 
     * export default () => (
     * <Avatar />
     * );
     * ```
     * */
    avatar?: React.ReactNode;    
}


export interface CardContentProps {

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Typography } from './';
    * 
    * export default () => (
    *   <>
    *       <Typography variant="h4" color="textPrimary"  />
    *       <Typography color="textSecondary" gutterBottom="true" />
    *   <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}


export interface CardMediaProps {
    /**
     * @name Image
     * @default https://images.unsplash.com/photo-1542838775-961894306368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360
     * @asset
     * */
    image?: string;

    /**
     * @name Src
     * */
    src?: string;

    /**
     * @name Height
     * @default 120px
     * */
    height?: string;
}


export interface CardActionAreaProps {

    /**
     * @name Disable Action Spacing
     * @group Card ActionArea
     * 
     * */
    disableActionSpacing?: boolean;
}


export interface CardActionsProps {

    /**
     * @name Disable Action Spacing
     * @group Card Actions
     * 
     * */
    disableActionSpacing?: boolean;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Button } from './';
    * 
    * export default () => (
    *   <Button variant="text"  />
    * );
    * ```
    **/
    children?: React.ReactNode;
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
 * @icon Square
 * @group Card
 */
export const CardHeader: React.SFC<CardHeaderProps> = props => {
    return (
        <CardHeaderComponent {...props} />
    )
}

/**
 * @name Card Content
 * @icon Square
 * @group Card
 */
export const CardContent: React.SFC<CardContentProps> = props => {
    return (
        <CardContentComponent>
            {props.children}
        </CardContentComponent>
    )
}

/**
 * @name Card Media
 * @group Card
 * @icon Image
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
 * @icon MinusSquare
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
 * @icon Square
 * @group Card
 */
export const CardActions: React.SFC<CardActionsProps> = props => {
    return (
        <CardActionsComponent {...props}>
            {props.children}
        </CardActionsComponent>
    )
}
