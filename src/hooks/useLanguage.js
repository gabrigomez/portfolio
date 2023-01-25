import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export default function ThemeContextProvider({children}) {
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  useEffect(()=> {
    localStorage.setItem('i18nextLng', language)
  }, [language]);

  return (
    <LanguageContext.Provider value={({language, setLanguage})}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage () {
  return useContext(LanguageContext);
};