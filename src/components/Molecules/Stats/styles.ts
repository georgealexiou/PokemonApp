import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../../themes/darkMode';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  statsTextColor:{
    color:'black',
    marginTop: 5.5,
    fontWeight: 'bold',
  },
  statsHeadingTextColor:{
    color:'black',
    marginTop: 5.5,
    fontWeight: 'bold',
    fontSize:30,
  },
  border: {
    margin: 10,
  },
});