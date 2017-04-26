import { put, call, race, takeLatest } from 'redux-saga/effects';
import Auth from '../api/auth';
import * as types from '../constants/actionTypes';

function* authorize({ username, password }) {
  // Send an action to tell the app we're sending request
  yield put({type: types.AUTH_SENDING_REQUEST, sending: true});

  try {
    let response = yield call(Auth.login, username, password);
    return response
  } catch(error) {
    yield put({type: types.AUTH_REQUEST_ERROR, error: error.message});
  } finally {
    // Set sending to false when the request completed
    yield put({type: types.AUTH_SENDING_REQUEST, sending: false});
  }
}

function* loginRequest({ data }) {
  let {username, password} = data;

  let response = yield call(Auth.login, username, password);
  console.log(response);
}

export default function* watchAuth() {
  yield takeLatest(types.AUTH_LOGIN_REQUEST, loginRequest);
}