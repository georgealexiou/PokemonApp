import { StyleSheet } from 'react-native';

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
  safeAreaView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
