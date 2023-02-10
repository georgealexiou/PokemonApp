import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  backgroundPokeball: {
    position: 'absolute',
    zIndex: -1,
    height: '100%',
    justifyContent: 'flex-start',
    right: -100,
  },
  flatList: { width: '100%', height: '100%' },
  simplePressable: {
    width: '100%',
    height: 100,
  },
  insideContainer: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});
