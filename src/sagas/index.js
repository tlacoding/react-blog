import import { fork } from 'redux-saga/effects'
import { watchFetchPosts } from './postsWatcher';

export default function* startSaga() {
  yield fork(watchFetchPosts);
}