import { Dimensions, StyleSheet } from 'react-native';
import { textStyle } from '../../../../themes/textStyle';

export const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '100%',
    top: 55,
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    height: 300,
  },
  text: {
    fontSize: 130,
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    opacity: 0.3,
    left: 5,
  },
  pokemonNameText: {
    ...textStyle.title,
    color: 'white',
    alignSelf: 'center',
  },
  closeModalPressable: {
    padding: 20,
    position: 'absolute',
  },
  pokemonImageContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  backgroundPokeball: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'flex-end',
    top: 250,
    right: 200,
  },
  typesContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
