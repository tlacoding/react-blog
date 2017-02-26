import React from 'react';
import { Link } from 'react-router';

import { formatPostDate } from '../ultils';

const PostPreview = ({ post }) => {
  return (
    <article className="post-preview">
      <Link to={ "/post/" + post.key }>
        <h2 className="post-title">{ post.title }</h2>
      </Link>
      <p className="post-meta">Posted on { formatPostDate(post.created) }
      </p>

      <div className="post-entry">{ post.summary }</div>
      <Link to={ "/post/" + post.key } className="btn btn-default btn-default">Read More</Link>
    </article>
  );
};

export default PostPreview;