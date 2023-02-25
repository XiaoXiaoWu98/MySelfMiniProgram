/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
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

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'cartoon':
      return <IconCartoon {...rest} />;
    case 'novel':
      return <IconNovel {...rest} />;
    case 'home':
      return <IconHome {...rest} />;
    case 'mine':
      return <IconMine {...rest} />;
    case 'right-arrow':
      return <IconRightArrow {...rest} />;

  }

  return null;
};

export default IconFont;
