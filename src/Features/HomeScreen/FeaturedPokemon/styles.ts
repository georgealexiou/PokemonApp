import { StyleSheet } from 'react-native';
import { theme } from '../../../../themes/theme';

export const styles = StyleSheet.create({
  simpleContainer: { width: '100%', height: 200 },
  innerContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    paddingRight: 5,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  imageStyle: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
});
