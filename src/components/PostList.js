/* eslint no-useless-constructor: "off" */
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Header from './common/Header';
import Post from './Post';

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
      postsMarkup = 'Loading';
    } else {
      console.log(posts);
      postsMarkup = posts.map((post, index) => (
        <Post post={post} key={index}/>
      ));
    }
    return (
      <div className="row">
        <div className="col-md-12">
          <Header />
          <div className="posts-list">{postsMarkup}</div>
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