import React, { Component } from 'react';

import Navigation from './common/Navigation';
import Footer from './common/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}