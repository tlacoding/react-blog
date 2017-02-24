import React from 'react';

const PostPreview = ({ post }) => {
  let created = new Date(post.created * 1000);
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return (
    <article className="post-preview">
      <a href={ "/post/" + post.key }>
        <h2 className="post-title">{ post.title }</h2>
      </a>
      <p className="post-meta">Posted on {
        days[created.getDay()] + ', ' +
        created.getDate() + ' ' +
        created.getFullYear() }
      </p>

      <div className="post-entry">{ post.summary }</div>
      <a href={ "/post/" + post.key } className="btn btn-default btn-default">Read More</a>
    </article>
  );
};

export default PostPreview;