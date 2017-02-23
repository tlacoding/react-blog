/* eslint no-useless-constructor: "off" */
import React from 'react';

const Header = ({title, subTitle}) => {
  let subTitleMarkup = ''
  if (subTitle !== undefined) {
    let subTitleMarkup = (<span className="page-subheading">{ subTitle }</span>);
  }

  return (
    <header className="header-section ">
      <div className="intro-header no-img">
        <div className="page-heading">
          <h1>{ title }</h1>
          <hr className="small" />
          { subTitleMarkup }
        </div>
      </div>
    </header>
  );
};

export default Header;