import * as React from 'react';
import AvatarComponent from '@material-ui/core/Avatar';

export interface AvatarProps  {

    /**
     * @name Src
     * @asset
    */
    src?: string;

    /**
     * @name Background
     * @group Color
     * @default #2196f3
     * @control color
     */
    backgroundColor?: string

    /**
     * @name Text
     * @group Color
     * @default #fff
     * @control color
     */
    textColor?: string

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
 * @icon Circle
 */
export const Avatar: React.SFC<AvatarProps> = props => {
    return (
        <AvatarComponent {...props} style={{backgroundColor: props.backgroundColor, color: props.textColor}}>
            {props.children}
        </AvatarComponent>
    )
}
