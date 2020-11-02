import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { NavBar } from './components/NavBar';
import { Content } from './App.styles';
import { Itineraries } from './screens/Itineraries';
import { Destinations } from './screens/Destinations';
import { WorldMap } from './screens/WorldMap';
import { Contact } from './screens/Contact';
import { Logout } from './components/Logout';
import { CountryProvider } from './contexts/CountryContext';
import { MapProvider } from './contexts/MapContext';

export default function App() {
  return (
    <>
      <Content>
        <Router>
          <NavBar />
          <Switch>
            <MapProvider>
              <CountryProvider>
                <Route exact path="/" component={Home} />
                <Route path="/map" component={WorldMap} />
                <Route path="/destinations" component={Destinations} />
                <Route path="/itineraries" component={Itineraries} />
                <Route path="/contact" component={Contact} />
                <Route path="/logout" component={Logout} />
              </CountryProvider>
            </MapProvider>
          </Switch>
        </Router>
      </Content>
    </>
  );
}
