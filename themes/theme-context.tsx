import React, { ReactElement, ReactNode, createContext, useState } from 'react';
import { lightTheme } from './light-theme';
import { Theme } from '.';

export const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme] = useState(lightTheme);
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
