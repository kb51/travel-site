import React, { useState, FC } from 'react';
import { Container } from './InfoSection.styles';
import { Link } from 'react-router-dom';

interface InfoSectionProps {
  title: string;
  paragraph: string;
  path: string;
}

export const InfoSection: FC<InfoSectionProps> = ({
  title,
  paragraph,
  path,
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <Link to={path}>
        <button>Click here</button>
      </Link>
    </Container>
  );
};
