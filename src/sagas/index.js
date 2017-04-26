import { fork } from 'redux-saga/effects'
import watchPosts from './postsSaga';
import watchAuth from './authSaga';

export default function* startSaga() {
  yield fork(watchPosts);
  yield fork(watchAuth);
}