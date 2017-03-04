/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeFormState } from '../actions/authActions';

import Header from './common/Header';
import LoginForm from './common/LoginForm.js'

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(event) {
    let { dispatch } = this.props;
    switch(event.target.id) {
      case 'email':
        dispatch(changeFormState({...this.props.auth.formState, username: event.target.value}));
        break;
      case 'password':
        dispatch(changeFormState({...this.props.auth.formState, password: event.target.value}));
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Header type="pageHeading" title="Hi Dude! Have a good day." subTitle="Fill your informations to login" />
        </div>
        <LoginForm
          data={this.props.auth.formState}
          handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
        />
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