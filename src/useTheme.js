import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={({theme, setTheme})}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme () {
  return useContext(ThemeContext);
};