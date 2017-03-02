/*
 * Actions describe changes of state in authentication
 */

import * as types from '../constants/actionTypes';

/**
 * Set the form state
 * @param {object} newFormState - The new form state object
 * @param {string} newFormState.username - The new value of username
 * @param {string} newFormState.password - The new value of password
 */
export const changeFormState = (newFormState) => ({
  type: types.AUTH_CHANGE_FORM,
  newFormState
});

/**
 * Set the new authentication state
 * @param {boolean} newAuthState - True means user is logged in, false means user isn't loggedin
 */
export const setAuthState = (newAuthState) => ({
  type: types.AUTH_SET_NEW,
  newAuthState
})

/**
 * Set the state to show loading icon while request is being sent
 */
export const sendingRequest = () => ({
  type: types.AUTH_SENDING_REQUEST,
  sending: true
});

/**
 * Send login request with the data which user fill in the form
 * @param {object} data - The login information object
 * @param {string} data.username - username of the user to log in
 * @param {string} data.password - password of the user to log in
 */
export const login = (data) => ({
  type: types.AUTH_LOGIN_REQUEST,
  data
});

/**
 * Tell the app we want to log out
 */
export const logout = () => ({
  type: types.AUTH_LOGOUT_REQUEST
});

/**
 * Set `error` state to handle error
 * @param {object} error - The error object we received from server when try to log in
 */
export const requestError = (error) => ({
  type: types.AUTH_REQUEST_ERROR,
  error
});

/**
 * Set the error state as empty
 */
export const clearError = () => ({
  type: types.AUTH_CLEAR_ERROR
});