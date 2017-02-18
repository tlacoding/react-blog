import React, { Component } from 'react';

import Navigation from './common/Navigation';
import Header from './common/Header';
import Footer from './common/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <div className="container" role="main">
          <div className="row">
            <div className="col-md-12">{this.props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}