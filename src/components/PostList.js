/* eslint no-useless-constructor: "off" */
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Header from './common/Header';

import { fetchPostsAction } from '../actions/postActions';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('DIDMOUNT');
    this.props.dispatch(fetchPostsAction());
  }

  render() {
    console.log(this.props.postsList, 'postList');
    return (
      <div className="row">
        <div className="col-md-12">
          <Header />
          <div className="posts-list">

            <article className="post-preview">
              <a href="/beautiful-jekyll/2015-02-20-test-markdown/">
                <h2 className="post-title">Example how to use markdown</h2>
                <h3 className="post-subtitle">
                Each post also has a subtitle
                </h3>
              </a>
              <p className="post-meta">
              Posted on February 20, 2015
              </p>
              <div className="post-entry">
              You can write regular markdown here and Jekyll will automatically convert it to a nice webpage. Here is some bold text Here is a secondary heading Here’s a code chunk: x &amp;lt;- 5 + 10 print(x)   And here is some code with syntax highlighting...
              <a href="/beautiful-jekyll/2015-02-20-test-markdown/" className="post-read-more">Read More</a>
              </div>
            </article>

            <article className="post-preview">
              <a href="/beautiful-jekyll/2015-02-13-hamlet-monologue/">
                <h2 className="post-title">To be</h2>
                <h3 className="post-subtitle">
                ... or not to be?
                </h3>
              </a>
              <p className="post-meta">
              Posted on February 13, 2015
              </p>
              <div className="post-entry">
              To be, or not to be–that is the question: Whether ‘tis nobler in the mind to suffer The slings and arrows of outrageous fortune Or to take arms against a sea of troubles And by opposing end them. To die, to sleep– No more–and by a sleep to say we...
              <a href="/beautiful-jekyll/2015-02-13-hamlet-monologue/" className="post-read-more">Read More</a>
              </div>
            </article>

            <article className="post-preview">
              <a href="/beautiful-jekyll/2015-01-27-dear-diary/">
                <h2 className="post-title">Dear diary</h2>
              </a>
              <p className="post-meta">
              Posted on January 27, 2015
              </p>
              <div className="post-entry">
              What is it with that Mary girl? Dragging me to school every day. As if I had a choice. What you don’t hear in those nursery rhymes is that she starves me if I don’t go to school with her; it’s the only way I can stay alive! I’m thinking...
              <a href="/beautiful-jekyll/2015-01-27-dear-diary/" className="post-read-more">Read More</a>
              </div>
            </article>
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