/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';

import Header from './common/Header';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Header type="pageHeading" title="Hi Dude! Have a good day." subTitle="Fill your informations to login" />
        </div>
        <div className="col-md-6 col-md-offset-3">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <div className="checkbox">
              <label><input type="checkbox" /> Remember me</label>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;