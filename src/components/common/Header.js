/* eslint no-useless-constructor: "off" */
import React from 'react';

const Header = ({type, title, subTitle, postMeta}) => {
  let headerContentMarkup = '';
  if (type == 'pageHeading' || type === undefined) {
    let subTitleMarkup = ''
    if (subTitle !== undefined) {
      subTitleMarkup = (<span className="page-subheading">{ subTitle }</span>);
    }

    headerContentMarkup = (
      <div className="page-heading">
        <h1>{ title }</h1>
        <hr className="small" />
        { subTitleMarkup }
      </div>
    );
  } else if (type == 'postHeading') {
    headerContentMarkup = (
      <div className="post-heading">
        <h1>{ title }</h1>
        <span className="post-meta">{ postMeta }</span>
      </div>
    );
  }

  return (
    <header className="header-section ">
      <div className="intro-header no-img">
        { headerContentMarkup }
      </div>
    </header>
  );
};

export default Header;