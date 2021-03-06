/* eslint no-useless-constructor: "off" */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PageProgress } from '../ultils';

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
    PageProgress.start();
    dispatch(fetchPostAction(postId));
  }

  render() {
    let { post, loading } = this.props.activePost;
    if (!loading)
      PageProgress.done();

    return (
      <div className="row">
        <div className="col-md-12">
          { loading ? '' :
            (<Header type="postHeading"
                    title={post.title}
                    postMeta={formatPostDate(post.created)}
            />)
          }
          <article role="main" className="blog-post">
            <ReactCSSTransitionGroup
              transitionName="post-list-animate"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
            { loading ? '' : (<div dangerouslySetInnerHTML={{__html: post.body}} />) }
            </ReactCSSTransitionGroup>
          </article>
        </div>
      </div>
    );
  }
}

PostDetail.propTypes = {
  activePost: PropTypes.object,
  params: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    activePost: state.posts.activePost
  };
}

export default connect(mapStateToProps)(PostDetail);