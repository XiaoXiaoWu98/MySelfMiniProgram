/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconRightArrow: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M394.41 250.027a46.08 46.08 0 0 1 58.795-5.291l6.4 5.376 229.291 229.29a46.08 46.08 0 0 1 5.29 58.88l-5.29 6.315-229.29 229.291a46.08 46.08 0 0 1-70.571-58.88l5.376-6.315L591.019 512 394.41 315.307a46.08 46.08 0 0 1-5.376-58.88l5.376-6.315z"
        fill={getIconColor(color, 0, '#8C8C8C')}
      />
    </svg>
  );
};

IconRightArrow.defaultProps = {
  size: 18,
};

export default IconRightArrow;
