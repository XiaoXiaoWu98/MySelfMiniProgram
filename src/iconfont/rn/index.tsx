/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconCartoon from './IconCartoon';
import IconNovel from './IconNovel';
import IconHome from './IconHome';
import IconMine from './IconMine';
import IconRightArrow from './IconRightArrow';
export { default as IconCartoon } from './IconCartoon';
export { default as IconNovel } from './IconNovel';
export { default as IconHome } from './IconHome';
export { default as IconMine } from './IconMine';
export { default as IconRightArrow } from './IconRightArrow';

export type IconNames = 'cartoon' | 'novel' | 'home' | 'mine' | 'right-arrow';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'cartoon':
      return <IconCartoon key="1" {...rest} />;
    case 'novel':
      return <IconNovel key="2" {...rest} />;
    case 'home':
      return <IconHome key="3" {...rest} />;
    case 'mine':
      return <IconMine key="4" {...rest} />;
    case 'right-arrow':
      return <IconRightArrow key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
