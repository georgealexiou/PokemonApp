import * as React from 'react';
import { View, Text } from 'react-native';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';

const Settings = ({ navigation }: any) => {
  return (
    <View>
      <ThemeSwitcher />
    </View>
  );
};

export default Settings;
