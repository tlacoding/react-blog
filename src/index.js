/* eslint no-useless-constructor: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import * as firebase from 'firebase';

import './styles/main.css';

import routes from './routers';
import App from './components/App';

var config = {
  apiKey: "AIzaSyBPylmACEz_psNitIB60Yn72MqcDPIk6_o",
  authDomain: "tlacoding.firebaseapp.com",
  databaseURL: "https://tlacoding.firebaseio.com",
  storageBucket: "tlacoding.appspot.com",
  messagingSenderId: "554082963121"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('root')
);