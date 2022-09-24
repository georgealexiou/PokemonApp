import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../../themes/darkMode';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  textColor: {
    color: 'black',
  },
  boldTextColor: {
    fontWeight:'bold',
    color: 'black',
  },
  statsTextLabel:{
    color:'black',
    fontWeight: 'bold',
    fontSize:17,
  },
  statsTextNumber:{
    color:'black',
    fontSize:17,
  },
  statsHeadingTextColor:{
    color:'black',
    fontWeight: 'bold',
    fontSize:30,
  },
  border: {
    borderColor: theme.palette.carbon,
    borderTopWidth: 3,
  },
});