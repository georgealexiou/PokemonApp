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
    marginTop: 20,
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
