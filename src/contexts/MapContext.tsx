import React, { useState, createContext, Dispatch } from 'react';
import { CountryData } from '../types/countries';

interface UserCountryData {
  country: CountryData;
  notes: string;
}

interface InitMapContextProps {
  visited: {
    visitedCountries: UserCountryData[];
    setVisitedCountries: Dispatch<UserCountryData[]>;
  };
  bucketlist: {
    bucketlistCountries: UserCountryData[];
    setBucketlistCountries: Dispatch<UserCountryData[]>;
  };
}

// @ts-ignore
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
        visited: { visitedCountries, setVisitedCountries },
        bucketlist: { bucketlistCountries, setBucketlistCountries },
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
