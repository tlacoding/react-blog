import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);