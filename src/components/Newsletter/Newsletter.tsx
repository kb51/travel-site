import React, { FC } from 'react';
import { Container } from './Newsletter.styles';
import { Input } from 'semantic-ui-react';

export const Newsletter: FC = () => {
  return (
    <Container>
      <h1>Sign up to our newsletter</h1>
      <p>Keep up to date with everything travel with our weekly newsletter</p>
      <Input action="Sign up" placeholder="Your email..." />
    </Container>
  );
};
