import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Content } from './App.styles';
import { Itineraries } from './components/Itineraries';
import { Destinations } from './components/Destinations';
import { Map } from './components/Map';
import { Contact } from './components/Contact';
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
