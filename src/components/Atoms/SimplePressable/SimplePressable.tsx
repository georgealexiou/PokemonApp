import { Pressable } from 'react-native';
import { ReactNode } from 'react';
import { SimpleContainer } from '../SimpleContainer/SimpleContainer';

type TypeProps = {
  children: ReactNode | ReactNode[];
  style: {
    width: number | string;
    height: number | string;
  };
  onPress?: () => void;
};

export const SimplePressable: React.FC<TypeProps> = ({ children, style, onPress }) => (
  <Pressable onPress={onPress}>
    <SimpleContainer style={style}>{children}</SimpleContainer>
  </Pressable>
);
