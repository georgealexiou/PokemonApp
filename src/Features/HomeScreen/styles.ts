import { StyleSheet } from 'react-native';
import { theme } from '../../../themes/theme';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.palette.white,
    justifyContent: 'center',
    height: 60,
    width: '45%',
    marginTop: 16,
    borderRadius: 12,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowOffset: { width: -5, height: 5 },
  },
  tinyLogo: {
    width: 350,
    height: 60,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
