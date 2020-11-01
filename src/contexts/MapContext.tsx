import React, { useState, createContext, Dispatch } from 'react';
import { CountryData } from '../types/countries';

interface InitMapContextProps {
  visited: {
    visitedCountries: CountryData[];
    setVisitedCountries: Dispatch<CountryData[]>;
  };
  bucketlist: {
    bucketlistCountries: CountryData[];
    setBucketlistCountries: Dispatch<CountryData[]>;
  };
}

export const MapContext = createContext({} as InitMapContextProps);

export function MapProvider({ children }) {
  const [visitedCountries, setVisitedCountries] = useState<CountryData[]>([]);
  const [bucketlistCountries, setBucketlistCountries] = useState<CountryData[]>(
    []
  );

  return (
    <MapContext.Provider
      value={{
        visited: { visitedCountries, setVisitedCountries },
        bucketlist: { bucketlistCountries, setBucketlistCountries },
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
