/* eslint no-useless-constructor: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

import './styles/main.css';

import configureStore from './store/configureStore';
import routes from './routers';

var config = {
  apiKey: "AIzaSyBPylmACEz_psNitIB60Yn72MqcDPIk6_o",
  authDomain: "tlacoding.firebaseapp.com",
  databaseURL: "https://tlacoding.firebaseio.com",
  storageBucket: "tlacoding.appspot.com",
  messagingSenderId: "554082963121"
};
firebase.initializeApp(config);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);