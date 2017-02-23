import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostList} />
    <Route path="/post/:postId" component={PostDetail}/>
  </Route>
);