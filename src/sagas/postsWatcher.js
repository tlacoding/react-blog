import { takeLatest } from 'redux-saga/effects';
import { fetchPostsSaga, fetchPostSaga } from './postsSaga';
import * as types from '../constants/actionTypes';

export function* watchFetchPosts() {
  yield takeLatest(types.FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(types.FETCH_POST, fetchPostSaga);
}