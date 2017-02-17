import React, { Component } from 'react';

import Navigation from './common/Navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}