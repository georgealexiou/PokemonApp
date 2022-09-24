import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../../themes/darkMode';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  textColor: {
    color: 'white',
  },
  boldTextColor: {
    fontWeight:'bold',
    color: 'white',
  },
  statsTextColor:{
    color:'white',
    marginTop: 5.5,
    fontWeight: 'bold',
  },
  statsHeadingTextColor:{
    color:'white',
    marginTop: 5.5,
    fontWeight: 'bold',
    fontSize:20,
  },
  border: {
    borderColor: theme.palette.carbon,
    borderTopWidth: 3,
    top: -200,
    margin: 10,
    marginTop: 1,
  },
});