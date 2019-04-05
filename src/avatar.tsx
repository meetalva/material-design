import * as React from 'react';
import AvatarComponent from '@material-ui/core/Avatar';

export interface AvatarProps  {

    /**
     * @name Src
     * @asset
    */
    src?: string;

    /**
     * @name Color
     * @group Style
     * @default #2196f3
     * @control color
     */
    color?: string

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Text } from '@meetalva/essentials';
    * 
    * export default () => (
    * <Text text="A">
    * );
    * ```
    **/
    children?: React.ReactNode;
}

/**
 * @name Avatar
 * @description For images, icons and initials
 * @icon Smile
 */
export const Avatar: React.SFC<AvatarProps> = props => {
    return (
        <AvatarComponent {...props} style={{backgroundColor: props.color}}>
            {props.children}
        </AvatarComponent>
    )
}
