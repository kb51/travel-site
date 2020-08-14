import React, { FC } from 'react';
import { Container } from './Footer.styles';
import { Grid, Image, Icon } from 'semantic-ui-react';

export const Footer: FC = () => {
  return (
    <Container>
      <Grid columns="three" divided>
        <Grid.Row>
          <Grid.Column>
            <Icon name="facebook square" />
            <Icon name="instagram" />
            <Icon name="twitter square" />
            <Icon name="mail" />
            <Icon name="google play" />
            <Icon name="app store ios" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
