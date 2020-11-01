import React, { useContext, useState } from 'react';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from 'react-map-gl';
import Pins from './Pins';
import { Footer } from '../../components/Footer';
import { MapContext } from '../../contexts/MapContext';
import PinInfo from './PinInfo';
import {
  Container,
  Title,
  NavWrapper,
  FullscreenControlWrapper,
  ScaleControlWrapper,
} from './Map.styles';

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

  const [popupInfo, setPopUpInfo] = useState(null);

  const _onClickMarker = (country) => {
    setPopUpInfo(country);
  };

  const mapContext = useContext(MapContext);

  const { visitedCountries, setVisitedCountries } = mapContext.visited;
  const { bucketlistCountries, setBucketlistCountries } = mapContext.bucketlist;

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
      </Container>
      <Footer />
    </>
  );
};
