import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../themes/darkMode';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 0,
    height: height / 6,
  },
  pokemonImg: {
    width: width / 1.5,
    height: height / 3,
    top: -160,
  },
  titleText: {
    fontSize: 35,
    color: theme.palette.ghost,
    fontWeight: 'bold',
  },
  separateStats: {
    width,
    fontSize: 20,
  },
  typeBox: {
    backgroundColor: theme.palette.cadet,
    opacity: 0.7,
    marginRight: 4,
    marginTop: 8,
    borderRadius: 7,
  },
  topContainer: {
     margin: 10,
     flexDirection: 'row',
  },
  textColor: {
    color: theme.palette.ghost,
  },
  boldTextColor: {
    fontWeight:'bold',
    color: theme.palette.ghost,
  },
  borderTop:{
    borderColor: theme.palette.carbon,
    borderBottomWidth: 3,
    top: -200,
    margin: 10,
    marginBottom: 1,
  },
  text: {
    color: "white",
    margin: 3,
  }
});