import React, { Component } from 'react';
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
            <a className="navbar-brand" href={siteConfig.SITE_URL}>{siteConfig.SITE_TITLE}</a>
          </div>

          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href={siteConfig.SITE_URL}>Home</a></li>
              <li><a href="http://deanattali.com">About me</a></li>
              <li><a href="http://deanattali.com/aboutme/#feed-meeee">Contact</a></li>
            </ul>
          </div>

          <div className="avatar-container">
            <div className="avatar-img-border">
              <a href={siteConfig.SITE_URL}>
                <img role="presentation" className="avatar-img" src={process.env.PUBLIC_URL + '/assets/img/avatar-icon.png'} />
            </a>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}