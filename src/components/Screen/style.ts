import { theme } from '../../../themes/darkMode';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  styledWhiteView: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: theme.spacing(4),
  },
});
