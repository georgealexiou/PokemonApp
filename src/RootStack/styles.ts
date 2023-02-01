import { StyleSheet } from 'react-native';
import { theme } from '../../themes/theme';

export const styles = StyleSheet.create({
  shadow: {
    position: 'absolute',
    bottom: 25,
    left: 90,
    right: 90,
    backgroundColor: '#171710',
    borderRadius: 200,
    height: 50,
    shadowOffset: { width: -5, height: 5 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.4,
    opacity: 0.9,
    elevation: 5,
  },
});
