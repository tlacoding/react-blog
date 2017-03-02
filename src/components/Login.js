/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './common/Header';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3" style={{marginTop: '45px'}}>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder='Email address'
              onChange={this.props.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder='Password'
              onChange={this.props.handleChangeInput}
            />
          </div>
          <div className="checkbox">
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: '', sending: false};
  }

  handleChangeInput(event) {
    switch(event.target.id) {
      case 'email':
        this.setState({username: event.target.value});
        break;
      case 'password':
        this.setState({password: event.target.value});
        break;
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <div className="row">
        <div className="col-md-12">
          <Header type="pageHeading" title="Hi Dude! Have a good day." subTitle="Fill your informations to login" />
        </div>
        <LoginForm handleChangeInput={this.handleChangeInput.bind(this)} />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStatetoProps)(Login);