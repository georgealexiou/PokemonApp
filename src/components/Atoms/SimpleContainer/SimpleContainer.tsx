import { View } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';

type TypeProps = {
  children: ReactNode | ReactNode[];
  style: {
    width: number | string;
    height: number | string;
  };
};

export const SimpleContainer: React.FC<TypeProps> = ({ children, style }) => (
  <View style={{ ...styles.container, ...style }}>{children}</View>
);
