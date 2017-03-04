import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data, handleChangeInput, handleSubmit} = this.props;
    return (
      <div className="col-md-6 col-md-offset-3" style={{marginTop: '45px'}}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={data.username}
              placeholder='Email address'
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={data.password}
              placeholder='Password'
              onChange={handleChangeInput}
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
};