import React, { useState, useEffect, createContext } from 'react';
import { List, Image } from 'semantic-ui-react';
import { Container, Title } from './Destinations.styles.js';
// @ts-ignore
// export const CountryContext = createContext();

// export function CountryProvider({ children }) {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then((res) => res.json())
//       .then((json) => {
//         setCountries(json);
//       });
//   }, []);

//   return (
//     <CountryContext.Provider value={[countries, setCountries]}>
//       {children}
//     </CountryContext.Provider>
//   );
// }

function Destinations() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((json) => {
        setCountries(json);
      });
  }, []);

  // const selectOptions = countries.map((country) => {
  //   return {
  //     value: country,
  //     // @ts-ignore
  //     label: country.name,
  //   };
  // });

  // console.log('selectoptions:', selectOptions);

  return (
    <>
      <Container>
        <Title>Destinations</Title>
        <List>
          {console.log(countries)}
          {countries.map((country: any) => (
            <List.Item>{country.name}</List.Item>
          ))}
          {/* <List.Item>
            <Image avatar src="/images/avatar/small/matthew.png" />
            <List.Content>
              <List.Header as="a">Matthew</List.Header>
              <List.Description>
                Last seen watching{' '}
                <a>
                  <b>The Godfather Part 2</b>
                </a>{' '}
                yesterday.
              </List.Description>
            </List.Content>
          </List.Item> */}
        </List>
      </Container>
    </>
  );
}

export default Destinations;
