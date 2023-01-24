import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState();

  useEffect(() => {

  }); 

  return (
    <ThemeContext.Provider value={({theme, setTheme})}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme () {
  return useContext(ThemeContext);
};