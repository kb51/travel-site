import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { NavBar } from './components/NavBar';
import { Content } from './App.styles';
import { Itineraries } from './screens/Itineraries';
import { Destinations } from './screens/Destinations';
import { Map } from './screens/Map';
import { Contact } from './screens/Contact';
import { Logout } from './components/Logout';

export default function App() {
  return (
    <>
      <Content>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/itineraries" component={Itineraries} />
            <Route path="/contact" component={Contact} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Router>
      </Content>
    </>
  );
}
