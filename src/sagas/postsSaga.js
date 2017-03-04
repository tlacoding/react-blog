import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchPosts, fetchPost } from '../api/firebaseApi';
import * as types from '../constants/actionTypes';

export default function* watchFetchPosts() {
  yield takeLatest(types.FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(types.FETCH_POST, fetchPostSaga);
}

function* fetchPostsSaga() {
  try {
    const response = yield call(fetchPosts);
    if (response.type === 'success') {
      yield put({ type: types.FETCH_POSTS_SUCCESS, payload: response.payload });
    } else {
      yield put({ type: types.FETCH_POSTS_FAILURE, payload: response.payload });
    }
  } catch (error) {
    yield put({ type: types.FETCH_POSTS_FAILURE, payload: error });
  }
}

function* fetchPostSaga({ postId }) {
  try {
    const response = yield call(fetchPost, postId);
    yield put({ type: types.FETCH_POST_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: types.FETCH_POST_FAILURE, payload: error });
  }
}