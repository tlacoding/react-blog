import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function(state = initialState.post, action) {
  let error;
  switch (action.type) {

    case types.FETCH_POSTS:
      return {...state, postsList: { posts:{}, error: null, loading: true}};
    case types.FETCH_POSTS_SUCCESS:
      return {...state, postsList: { posts: action.payload, error: null, loading: false}};
    case types.FETCH_POSTS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, postsList: { posts:{}, error: error, loading: false}};

    case types.FETCH_POST:
      return {...state, activePost: { post: null, error: null, loading: true}};
    case types.FETCH_POST_SUCCESS:
      return {...state, activePost: { post: action.payload, error: null, loading: false}};
    case types.FETCH_POST_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, activePost: { post:{}, error: error, loading: false}};

    default:
      return state;
  }
}