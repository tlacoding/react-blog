import React from 'react';

import * as siteConfig from '../../constants/siteConfig';

const Footer = () => {
  let socialLinks = siteConfig.SITE_SOCIAL_CONTACT.map(function(value, index) {
    return (
      <li key={index}>
        <a href={value.link} title={value.name}>
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={'fa fa-' + value.icon + ' fa-stack-1x fa-inverse'}></i>
          </span>
        </a>
      </li>
    );
  });
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-inline text-center footer-links">{socialLinks}</ul>
            <p className="copyright text-muted">© Thong Le&nbsp;•&nbsp;2017&nbsp;•&nbsp;
              <a href={'mailto:' + siteConfig.SITE_EMAIL}>{siteConfig.SITE_EMAIL}</a>
            </p>
            <p className="theme-by text-muted">
              Theme by <a href="http://deanattali.com/beautiful-jekyll/">beautiful-jekyll</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;