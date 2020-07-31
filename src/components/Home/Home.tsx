import React from 'react';
import { Container, Title } from './Home.styles';
import { InfoSection } from '../InfoSection';
import { Newsletter } from '../Newsletter';
import { ScrollArrow } from '../ScrollArrow';

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
        background="https://images.unsplash.com/photo-1513492365349-8ba97c199501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
      <InfoSection
        path="/destinations"
        title="Destinations"
        paragraph="Check out destinations of the world and shared itineraries from other users"
        background="https://images.unsplash.com/photo-1513492365349-8ba97c199501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
      <InfoSection
        path="/itineraries"
        title="Itineraries"
        paragraph="Plan your trip and add your own custom itineraries"
        background="https://images.unsplash.com/photo-1513492365349-8ba97c199501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
      <Newsletter />
      <ScrollArrow />
    </>
  );
};
