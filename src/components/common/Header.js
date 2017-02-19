/* eslint no-useless-constructor: "off" */
import React from 'react';

const Header = () => {
  return (
    <header className="header-section ">
      <div className="intro-header no-img">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-heading">
                <h1>Hello, Genius!</h1>
                <hr className="small" />
                <span className="page-subheading">Hãy cùng nhau tìm hiểu lập trình</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;