/* eslint no-useless-constructor: "off" */
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import * as siteConfig from '../../constants/siteConfig';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.removeEventListener('scroll', false);
    window.addEventListener('scroll', (event) => {
      let navBar = document.querySelector('nav.navbar');
      let doc = document.documentElement;
      let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      if (top > 50) {
        navBar.classList.add('top-nav-short');
      } else {
        navBar.classList.remove('top-nav-short');
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">{siteConfig.SITE_TITLE}</IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="nav navbar-nav navbar-right">
              <li><IndexLink to="/" className="navbar-brand" activeClassName="active">{siteConfig.SITE_TITLE}</IndexLink></li>
              <li><Link to="about-me" activeClassName="active">About me</Link></li>
              <li><Link to="contact" activeClassName="active">Contact</Link></li>
            </ul>
          </div>

          <div className="avatar-container">
            <div className="avatar-img-border">
              <Link to="/">
                <img role="presentation" className="avatar-img" src={process.env.PUBLIC_URL + '/assets/img/avatar-icon.png'} />
              </Link>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}