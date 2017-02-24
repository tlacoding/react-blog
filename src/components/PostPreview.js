import React from 'react';

import { formatPostDate } from '../ultils';

const PostPreview = ({ post }) => {
  return (
    <article className="post-preview">
      <a href={ "/post/" + post.key }>
        <h2 className="post-title">{ post.title }</h2>
      </a>
      <p className="post-meta">Posted on { formatPostDate(post.created) }
      </p>

      <div className="post-entry">{ post.summary }</div>
      <a href={ "/post/" + post.key } className="btn btn-default btn-default">Read More</a>
    </article>
  );
};

export default PostPreview;