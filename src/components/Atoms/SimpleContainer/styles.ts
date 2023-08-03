import { StyleSheet } from 'react-native';
import { theme } from '../../../../themes/theme';
import { Theme } from '../../../../themes';

export const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderRadius: 12,
      shadowColor: theme.primaryShadowColor,
      shadowRadius: 8,
      shadowOpacity: 0.2,
      shadowOffset: { width: -5, height: 5 },
    },
    containerNoShadow: {
      borderRadius: 12,
    },
  });
