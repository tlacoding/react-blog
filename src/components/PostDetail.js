/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPostAction } from '../actions/postActions'

import Header from './common/Header';

class PostDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { postId } = this.props.params;
    let { dispatch } = this.props;
    dispatch(fetchPostAction(postId));
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

const mapStateToProps = (state) => {
  return {
    activePost: state.posts.activePost
  };
}

export default connect(mapStateToProps)(PostDetail);