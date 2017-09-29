import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Import all page components here
 */
import App from './App';
import Header from './Header';
import Truckers from './Truckers';
import Mechanics from './Mechanics';
import Team from './Team';
import SignupForm from './SignupForm';

const Main = () => (
  <main>
    <Switch>
    <Route exact path="/" component={Truckers} />
    <Route path="/team" component={Team} />
    <Route path="/mechanics" component={Mechanics} />
    <Route path="/signup" component={SignupForm} />
    </Switch>
  </main>
)

export default Main
