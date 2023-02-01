import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  generationContainer: {
    borderRadius: 20,
    height: 80,
    backgroundColor: '#e6e6e6',
    borderColor: '#444444',
    borderWidth: 2,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    opacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5 },
    marginTop: 30,
    margin: 15,
    width: '100%',
  },
});
