import { takeLatest } from 'redux-saga/effects';
import { fetchPostsSaga } from './postsSaga';
import * as types from '../constants/actionTypes';

export function* watchFetchPosts() {
  yield takeLatest(types.FETCH_POSTS, fetchPostsSaga);
}