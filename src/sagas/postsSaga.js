import { put, call } from 'redux-saga/effects';
import { fetchPosts } from '../api/firebaseApi';
import * as types from '../constants/actionTypes';

export function* fetchPostsSaga() {
  const response = yield call(fetchPosts);
  if (response.type == 'success') {
    yield put({ type: types.FETCH_POST_SUCCESS, payload: response.payload });
  } else {
    yield put({ type: types.FETCH_POST_FAILURE, response.payload });
  }
}