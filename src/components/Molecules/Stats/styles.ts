import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
});