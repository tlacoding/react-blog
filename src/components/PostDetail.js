/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NProgress from 'nprogress';

import { fetchPostAction } from '../actions/postActions'
import { formatPostDate } from '../ultils';

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
    let { post, error, loading } = this.props.activePost;
    let postMarkup = '';
    let header = '';
    if (loading) {
      header = (
        <header className="header-section ">
          <div className="intro-header no-img"></div>
        </header>
      );
      NProgress.start();
      NProgress.set(0.4);
    } else {
      let created = formatPostDate(post.created);
      header = (<Header type="postHeading" title={post.title} postMeta={created} />);
      postMarkup = (
        <article role="main" className="blog-post">
          {post.body}
        </article>
      );
      NProgress.done();
    }

    return (
      <div className="row">
        <div className="col-md-12">
          { header }
          <article role="main" className="blog-post">
            <ReactCSSTransitionGroup
              transitionName="post-list-animate"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
            { loading ? '' : postMarkup }
            </ReactCSSTransitionGroup>
          </article>
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