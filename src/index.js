import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import './styles/main.css';

import routes from './routers';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('root')
);