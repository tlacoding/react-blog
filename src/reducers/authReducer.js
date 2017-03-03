import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function(state = initialState.auth, action) {
  let error;
  switch (action.type) {
    case types.AUTH_CHANGE_FORM:
      return {...state, formState: action.newFormState};
    case types.AUTH_SENDING_REQUEST:
      return {...state, sending: true};
    case types.AUTH_SET_NEW:
      return {...state, loggedIn: action.newAuthState, user: action.user};
    case types.AUTH_REQUEST_ERROR:
      return {...state, error: action.error};
    case types.AUTH_CLEAR_ERROR:
      return {...state, error: null};

    default:
      return state;
  }
}