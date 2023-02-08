import { Pressable } from 'react-native';
import { ReactNode } from 'react';
import { SimpleContainer } from '../SimpleContainer/SimpleContainer';
import { theme } from '../../../../themes/theme';

type TypeProps = {
  children: ReactNode | ReactNode[] | undefined;
  style: {
    width?: number | string;
    height?: number | string;
  };
  onPress?: () => void;
  backgroundColor?: string;
  shadow?: boolean;
};

export const SimplePressable: React.FC<TypeProps> = ({
  children,
  style,
  onPress,
  backgroundColor = theme.palette.white,
  shadow = true,
}) => (
  <Pressable onPress={onPress} style={style}>
    <SimpleContainer style={{ width: '100%', height: '100%' }} backgroundColor={backgroundColor} shadow={shadow}>
      {children}
    </SimpleContainer>
  </Pressable>
);
