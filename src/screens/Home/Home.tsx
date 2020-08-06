import React from 'react';
import { Container, Title } from './Home.styles';
import { InfoSection } from '../../components/InfoSection';
import { Newsletter } from '../../components/Newsletter';
import { ScrollArrow } from '../../components/ScrollArrow';

export const Home = () => {
  return (
    <>
      <Container>
        <Title>GlobeTrotter</Title>
      </Container>
      <InfoSection
        path="/map"
        title="Map"
        paragraph="Use the map to build up a record of places you have been and places you wish to go to"
        background="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80"
      />
      <InfoSection
        path="/destinations"
        title="Destinations"
        paragraph="Check out destinations of the world and shared itineraries from other users"
        background="https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2031&q=80"
      />
      <InfoSection
        path="/itineraries"
        title="Itineraries"
        paragraph="Plan your trip and add your own custom itineraries"
        background="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      />
      <Newsletter />
      <ScrollArrow />
    </>
  );
};
