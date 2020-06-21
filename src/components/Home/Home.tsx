import React from 'react';
import { Container, Title } from './Home.styles';
import { InfoSection } from '../InfoSection';

export const Home = () => {
  return (
    <>
      <Container>
        <Title>GlobeTrotter</Title>
      </Container>
      <InfoSection />
      <InfoSection />
      <InfoSection />
    </>
  );
};
