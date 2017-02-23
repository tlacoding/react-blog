/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';

import Header from './common/Header';

class PostDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Header title="Post Title"/>
          <div className="posts-list">
            Post content
          </div>
        </div>
      </div>
    );
  }
}

// PostDetail.propTypes = {

// }

export default PostDetail;