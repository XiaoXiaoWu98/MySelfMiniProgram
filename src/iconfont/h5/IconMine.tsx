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

const IconMine: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M899.64 897.715c-7.238-108.133-60.68-208.738-146.61-276.032l-5.165-3.568-0.047 0.07c-4.887-2.989-10.458-4.587-16.193-4.587-19.702 0-31.458 9.498-31.458 25.412 0 9.266 4.285 17.975 11.477 23.883l-0.08 0.139 4.562 3.266c72.065 51.519 112.638 129.653 120.584 232.273l0.085 1.12a31.507 31.507 0 0 0-0.116 2.612c0 17.341 14.058 31.4 31.4 31.4 16.76 0 30.45-13.13 31.35-29.665h0.624l-0.412-6.323z m-101.124-525.92c0-156.107-128.53-283.118-286.525-283.118S225.465 215.688 225.465 371.796c0 84.11 37.191 162.57 102.378 216.66-117.017 62.453-194.688 181.59-203.48 313.119l-0.362 5.483c-0.007 0.113-0.016 0.226-0.022 0.34l-0.033 0.5h0.02c-0.009 0.267-0.02 0.533-0.02 0.802 0 14.703 11.918 26.622 26.622 26.622 14.703 0 26.623-11.918 26.623-26.622 0-0.27-0.013-0.535-0.02-0.802h0.554l0.417-5.468c9.648-124.998 88.871-234.45 202.112-279.553 33.81 15.706 85.42 32.06 131.715 32.06 42.89 0 84.54-9.45 124.199-28.307l29.049-16.863 23.72-15.567c69.63-54.203 109.579-135.28 109.579-222.404zM511.99 597.932c-126.248 0-228.95-101.462-228.95-226.158 0-124.673 102.701-226.112 228.95-226.112 126.26 0 228.973 101.439 228.973 226.112-0.001 124.696-102.714 226.158-228.973 226.158z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMine.defaultProps = {
  size: 18,
};

export default IconMine;
