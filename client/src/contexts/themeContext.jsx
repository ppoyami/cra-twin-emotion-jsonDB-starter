import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');

    if (typeof storedPrefs === 'string') return storedPrefs;

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) return 'dark';
  }
  return 'dark';
};

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());
  const root = useMemo(() => window.document.documentElement, []);

  useEffect(() => {
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not founded');
  return context;
};
