import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 70,
    backgroundColor: 'white',
  },
  background: {
    position: 'absolute',
    zIndex: -1,
    height: '100%',
    justifyContent: 'flex-end',
    right: -170,
  },
});
