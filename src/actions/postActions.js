import * as types from '../constants/actionTypes';

export const fetchPostsAction = () => ({
  type: types.FETCH_POSTS
});

export const fetchPostAction = (payload) => ({
  type: types.FETCH_POST,
  payload
})