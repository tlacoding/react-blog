import * as types from '../constants/actionTypes';

export const fetchPostsAction = () => ({
  type: types.FETCH_POSTS
});

export const fetchPostAction = (postId) => ({
  type: types.FETCH_POST,
  postId
})