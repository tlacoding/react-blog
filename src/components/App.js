/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';

import Navigation from './common/Navigation';
import Footer from './common/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container" role="main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;