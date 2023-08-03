import { StyleSheet, Switch, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../../themes/use-theme';
import { Theme } from '../../../../themes';

export const ThemeSwitcher = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const theme = useTheme();
  const styles = useStyleSheet(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Switch
        // trackColor={{ false: '#767577', true: '#81b0ff' }}
        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.text}>Dark Mode</Text>
      <Text>Dark Mode</Text>
      <Text>Dark Mode</Text>
      <Text>Dark Mode</Text>
      <Text>Dark Mode</Text>
    </SafeAreaView>
  );
};

const useStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    text: {
      color: 'black',
    },
  });
