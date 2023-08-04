import React, { ReactNode, createContext, useState } from 'react';
import { Theme } from '.';
import { lightTheme } from './light-theme';

export const ThemeContext = createContext<{ theme: Theme; setTheme: React.Dispatch<Theme> }>({
  theme: lightTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
