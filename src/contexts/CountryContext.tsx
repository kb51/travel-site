import React, { useState, useEffect, createContext } from 'react';
import { CountryData } from '../types/countries';

export const CountryContext = createContext<any>([]);

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
      });
  }, []);

  console.log(`Context is ${countries}`);

  return (
    <CountryContext.Provider value={[countries, setCountries]}>
      {children}
    </CountryContext.Provider>
  );
}
