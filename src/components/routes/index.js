import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Auth from './Auth';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
    </Switch>
  </Router>
);

