import React, { useState, createContext, Dispatch } from 'react';
import { CountryData } from '../types/countries';

interface UserCountryData {
  country: CountryData;
  notes: string;
}

interface InitMapContextProps {
  visitedCountries: UserCountryData[];
  setVisitedCountries: Dispatch<UserCountryData[]>;
  bucketlistCountries: UserCountryData[];
  setBucketlistCountries: Dispatch<UserCountryData[]>;
}

export const MapContext = createContext<InitMapContextProps>(
  {} as InitMapContextProps
);

export function MapProvider({ children }) {
  const [visitedCountries, setVisitedCountries] = useState<UserCountryData[]>(
    []
  );
  const [bucketlistCountries, setBucketlistCountries] = useState<
    UserCountryData[]
  >([]);

  return (
    <MapContext.Provider
      value={{
        visitedCountries,
        setVisitedCountries,
        bucketlistCountries,
        setBucketlistCountries,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
