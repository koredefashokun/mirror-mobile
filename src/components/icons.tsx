import React from 'react';
import Svg, { Path } from 'react-native-svg';

const icons = {
  'chevron-left': <Path d='M15 18l-6-6 6-6' />,
};

export type IconType = keyof typeof icons;

interface IconProps {
  size?: number;
  color?: number;
  name: IconType;
  style?: StyleProp<ViewStyle>;
}

export const Icon: React.FC<IconProps> = ({
  size = 24,
  color = '#000000',
  name,
  style,
}) => (
  <Svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    style={style}
  >
    {icons[name]}
  </Svg>
);
