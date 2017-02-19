import React from 'react';

const Post = ({ post }) => {
  let created = new Date(post.created * 1000);
  return (
    <article className="post-preview">
      <a href={ "/post/" + post.key }>
        <h2 className="post-title">{ post.title }</h2>
      </a>
      <p className="post-meta">Posted on { created.getDate() }</p>

      <div className="post-entry">{ post.summary }</div>
      <a href={ "/post/" + post.key } className="btn btn-default">Read More</a>
    </article>
  );
};

export default Post;