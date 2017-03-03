/* eslint no-useless-constructor: "off" */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PageProgress } from '../ultils';

import Header from './common/Header';
import PostPreview from './PostPreview';

import { fetchPostsAction } from '../actions/postActions';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    PageProgress.start();
    this.props.dispatch(fetchPostsAction());
  }

  render() {
    let { posts, error, loading } = this.props.postsList;
    if (!loading)
      PageProgress.done();

    return (
      <div className="row">
        <div className="col-md-12">
          <Header title="Hello, Genius!" subTitle="Hãy cùng nhau tìm hiểu lập trình"/>
          <div className="posts-list">
            <ReactCSSTransitionGroup
              transitionName="post-list-animate"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              { loading ? '' :
                posts.map((post, index) => (
                  <PostPreview post={post} key={index}/>
                ))
              }
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