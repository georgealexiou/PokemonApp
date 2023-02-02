import { View } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';
import { theme } from '../../../../themes/theme';

type TypeProps = {
  children: ReactNode | ReactNode[] | undefined;
  style: {
    width: number | string;
    height: number | string;
  };
  backgroundColor?: string;
  shadow?: boolean;
};

export const SimpleContainer: React.FC<TypeProps> = ({
  children,
  style,
  backgroundColor = theme.palette.white,
  shadow = true,
}) => (
  <>
    {shadow ? (
      <View style={{ ...styles.container, backgroundColor: backgroundColor, ...style }}>{children}</View>
    ) : (
      <View style={{ ...styles.containerNoShadow, backgroundColor: backgroundColor, ...style }}>{children}</View>
    )}
  </>
);
