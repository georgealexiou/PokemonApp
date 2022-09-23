import { Dimensions, StyleSheet } from 'react-native';

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
});