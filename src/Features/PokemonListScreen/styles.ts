import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  pressableStyle: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 120,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 5 },
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
