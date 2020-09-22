// @ts-nocheck
import React, { FC } from 'react';
import { Container } from './Footer.styles';
import { Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const socialMedia = {
  'facebook square': 'https://www.facebook.com',
  instagram: 'https://www.instagram.com',
  'twitter square': 'https://www.twitter.com',
  'google play': 'https://www.google.com',
  'app store ios': 'https://www.apple.com',
};

export const Footer: FC = () => {
  return (
    <Container>
      <Grid columns="four">
        <Grid.Row>
          <Grid.Column width={8}>
            <h3>MapApp</h3>
          </Grid.Column>
          <Grid.Column>
            <h3>Lorem Ipsum </h3>
          </Grid.Column>
          <Grid.Column>
            <h3>About</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {Object.keys(socialMedia).map((key) => {
              console.log(key);
              return (
                <a target="blank" href={socialMedia[key]}>
                  <Icon color="black" name={key} />
                </a>
              );
            })}
          </Grid.Column>
          <Grid.Column>
            <Link to="/">Home</Link>
          </Grid.Column>
          <Grid.Column>Lorem Ipsum</Grid.Column>
          <Grid.Column>Who are we?</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <a href="">Terms and conditions</a>
          </Grid.Column>
          <Grid.Column>
            <Link to="/map">Map</Link>
          </Grid.Column>
          <Grid.Column>Lorem Ipsum</Grid.Column>
          <Grid.Column>Careers</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <a href="">Privacy</a>
          </Grid.Column>
          <Grid.Column>
            <Link to="/destinations">Destinations</Link>
          </Grid.Column>
          <Grid.Column>Lorem Ipsum</Grid.Column>
          <Grid.Column>FAQs</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <a href="">Accessability</a>
          </Grid.Column>
          <Grid.Column>
            <Link to="/itineraries">Itineraries</Link>
          </Grid.Column>
          <Grid.Column>Lorem Ipsum</Grid.Column>
          <Grid.Column>Eco friendly</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>© 2020 MappApp. All rights reserved.</Grid.Column>
          <Grid.Column>
            <Link to="/contact">Contact</Link>
          </Grid.Column>
          <Grid.Column>Lorem Ipsum</Grid.Column>
          <Grid.Column>Support us</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
