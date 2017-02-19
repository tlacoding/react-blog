import * as types from '../constants/actionTypes';

const fetchPostsAction = () => ({
  type: types.FETCH_POSTS
});

const fetchPostAction = (payload) => ({
  type: types.FETCH_POST,
  payload
})