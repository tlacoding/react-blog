import * as types from '../constants/actionTypes';

const fetchPostsAction = (payload) => ({
  type: types.FETCH_POSTS
  payload
});

const fetchPostAction = (post) => ({
  type: types.FETCH_POST,
  post
})