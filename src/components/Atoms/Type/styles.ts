import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 18,
  },
  smallText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 15,
  },
  typeBox: {
    marginRight: 4,
    borderRadius: 8,
    width: 125,
    height: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  smallTypeBox: {
    marginRight: 4,
    borderRadius: 8,
    width: 70,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
