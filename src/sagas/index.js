import { fork } from 'redux-saga/effects'
import watchFetchPosts from './postsSaga';

export default function* startSaga() {
  yield fork(watchFetchPosts);
}