import React, { useState, useContext } from 'react';
import { List, Image } from 'semantic-ui-react';
import { Container, Title } from './Destinations.styles';
import { Footer } from '../../components/Footer';
import { CountryContext } from '../../contexts/CountryContext';

export const Destinations = () => {
  const [filterValue, setFilterValue] = useState('A');

  const [countries] = useContext(CountryContext);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredCountries = countries.filter(
    (country) => country.name[0] === filterValue
  );

  return (
    <>
      <Container>
        <Title>Destinations</Title>
        <List horizontal>
          {alphabet.map((letter: string) => (
            <List.Item as="a" onClick={() => setFilterValue(letter)}>
              {letter}
            </List.Item>
          ))}
        </List>
        <List>
          {filteredCountries.length ? (
            filteredCountries.map((country: any) => (
              <List.Item>
                <List.Content>
                  <List.Header>
                    <a>{country.name}</a>, {country.region}.
                  </List.Header>
                  <List.Description>
                    Capital city:{' '}
                    <a>
                      <b>{country.capital}</b>
                    </a>{' '}
                    .
                  </List.Description>
                </List.Content>
              </List.Item>
            ))
          ) : (
            <List.Item>
              <Image
                avatar
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nothing-found-1-601278.png"
              />
              <List.Content>
                <List.Header>No countries found!</List.Header>
                <List.Description>
                  Select a different letter above.
                </List.Description>
              </List.Content>
            </List.Item>
          )}
        </List>
      </Container>
      <Footer />
    </>
  );
};
