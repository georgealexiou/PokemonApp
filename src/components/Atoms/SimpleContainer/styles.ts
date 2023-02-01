import { StyleSheet } from 'react-native';
import { theme } from '../../../../themes/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white,
    borderRadius: 12,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowOffset: { width: -5, height: 5 },
  },
});
