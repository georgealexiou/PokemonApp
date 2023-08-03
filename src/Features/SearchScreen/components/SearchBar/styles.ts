import { StyleSheet } from 'react-native';
import { textStyle } from '../../../../../themes/textStyle';
import { Theme } from '../../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 50,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      padding: 10,
    },
    textField: {
      flex: 1,
    },
    text: {
      alignSelf: 'center',
      justifyContent: 'center',
      ...textStyle.caption,
    },
  });
