import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../../themes/darkMode';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight:"bold",
    fontSize:20,
  },
  typeBox: {
    marginRight: 4,
    width:100,
    height: 30,
    borderRadius: 12,
    justifyContent:"center",
    alignItems:"center",
  },
});