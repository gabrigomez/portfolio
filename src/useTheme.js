import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState(false);

  useEffect(()=> {
    const root = window.document.documentElement;

    if (theme) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={({theme, setTheme})}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme () {
  return useContext(ThemeContext);
};