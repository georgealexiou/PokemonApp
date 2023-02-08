import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  pressableStyle: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: 120,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 7 },
    width: '47%',
    margin: 5,
    padding: 10,
  },
  numberStyle: {
    fontSize: 57,
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    opacity: 0.3,
    left: 5,
    width: 160,
  },
  imageStyle: { height: 80, width: 80, resizeMode: 'contain' },
  imageContainer: { justifyContent: 'center', alignItems: 'center', width: '60%' },
  numberContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: 60,
  },
});
