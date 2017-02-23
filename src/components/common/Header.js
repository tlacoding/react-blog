/* eslint no-useless-constructor: "off" */
import React from 'react';

const Header = ({title, subTitle}) => {
  return (
    <header className="header-section ">
      <div className="intro-header no-img">
        <div className="page-heading">
          <h1>{ title }</h1>
          <hr className="small" />
          <span className="page-subheading">{ subTitle }</span>
        </div>
      </div>
    </header>
  );
};

export default Header;