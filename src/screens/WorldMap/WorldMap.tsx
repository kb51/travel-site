import React, { useContext, useState } from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from 'react-map-gl';
import Pins from './Pins';
import PinInfo from './PinInfo';
import { MapContext } from '../../contexts/MapContext';

import AddDestination from './Modal';
import {
  Container,
  Title,
  NavWrapper,
  FullscreenControlWrapper,
  ScaleControlWrapper,
} from './Map.styles';
import { Footer } from '../../components/Footer';

export function WorldMap() {
  const [viewport, setViewport] = useState({
    latitude: 51.4934,
    longitude: -0.0005,
    zoom: 1,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '90%',
  });

  const _onClickMarker = (country) => {
    setPopUpInfo(country);
  };
  const [popupInfo, setPopUpInfo] = useState<any>();

  const { visited, bucketlist } = useContext(MapContext);

  const { visitedCountries, setVisitedCountries } = visited;
  const { bucketlistCountries, setBucketlistCountries } = bucketlist;

  return (
    <>
      <Container>
        <Title>Map</Title>
        <AddDestination />
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/kb51/ckawuxjic00to1ipp60a37454"
          onViewportChange={(viewport) => {
            // @ts-ignore
            setViewport(viewport);
          }}
          mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        >
          <Pins
            color="limegreen"
            data={visitedCountries}
            onClick={_onClickMarker}
          />
          <Pins
            color="dodgerblue"
            data={bucketlistCountries}
            onClick={_onClickMarker}
          />
          {popupInfo ? (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={popupInfo.country.latlng[1]}
              latitude={popupInfo.country.latlng[0]}
              closeOnClick={false}
              onClose={() => setPopUpInfo(null)}
            >
              <PinInfo
                setPopUpInfo={setPopUpInfo}
                visitedCountries={visitedCountries}
                setVisitedCountries={setVisitedCountries}
                bucketlistCountries={bucketlistCountries}
                setBucketlistCountries={setBucketlistCountries}
                info={popupInfo}
              />
            </Popup>
          ) : null}
          <FullscreenControlWrapper>
            <FullscreenControl />
          </FullscreenControlWrapper>
          <NavWrapper>
            <NavigationControl />
          </NavWrapper>
          <ScaleControlWrapper>
            <ScaleControl />
          </ScaleControlWrapper>
        </MapGL>
      </Container>
      <Footer />
    </>
  );
}
