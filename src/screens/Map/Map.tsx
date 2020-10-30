import React, { useState } from 'react';
import { Container, Title } from './Map.styles';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from 'react-map-gl';
import Pins from './Pins';

import { Footer } from '../../components/Footer';

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.4934,
    longitude: -0.0005,
    zoom: 1,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '90%',
  });

  return (
    <>
      <Container>
        <Title>Map</Title>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/kb51/ckawuxjic00to1ipp60a37454"
          mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
          onViewportChange={(viewport) => {
            // @ts-ignore
            setViewport(viewport);
          }}
        />
      </Container>
      <Footer />
    </>
  );
};
