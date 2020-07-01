import React, { FC } from 'react';
import { Container } from './InfoSection.styles';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

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
      {/* <ImageContainer> */}
      <Image
        src={
          'https://images.unsplash.com/photo-1513492365349-8ba97c199501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        }
        style={{ height: 100, width: 100 }}
        alt="Map"
        size="medium"
        floated="right"
      />
      {/* </ImageContainer> */}
    </Container>
  );
};
