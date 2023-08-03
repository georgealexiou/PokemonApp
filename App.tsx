import RootStack from './src/RootStack/RootStack';
import 'expo-dev-menu';
import { ThemeProvider } from './themes/theme-context';
import React from 'react';

export default function App() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
