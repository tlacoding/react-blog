/* eslint no-useless-constructor: "off" */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NProgress from 'nprogress';

import Header from './common/Header';
import PostPreview from './PostPreview';

import { fetchPostsAction } from '../actions/postActions';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchPostsAction());
  }

  render() {
    let { posts, error, loading } = this.props.postsList;
    let postsMarkup = '';
    if (loading) {
      NProgress.start();
      NProgress.set(0.4);
      postsMarkup = '';
    } else {
      postsMarkup = posts.map((post, index) => (
        <PostPreview post={post} key={index}/>
      ));
      NProgress.done();
    }
    return (
      <div className="row">
        <div className="col-md-12">
          <Header />
          <div className="posts-list">
            <ReactCSSTransitionGroup
              transitionName="post-list-animate"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {postsMarkup}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsList: state.posts.postsList
  };
}

export default connect(mapStateToProps)(PostList);