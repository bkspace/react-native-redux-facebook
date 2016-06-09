import { facebookLoginAPI, getFacebookInfoAPI } from '../services/facebook';
import { getServerAuthToken } from '../services/auth';

export const AUTH_STARTED = 'AUTH_STARTED';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_FAILURE_REMOVE = 'AUTH_FAILURE_REMOVE';
export const LOGOUT = 'LOGOUT';

export function authStarted() {
  return {
    type: AUTH_STARTED,
  };
}

export function authSuccess(facebookToken, facebookProfile, serverAuthToken) {
  return {
    type: AUTH_SUCCESS,
    facebookToken,
    facebookProfile,
    authToken: serverAuthToken,
  };
}

export function authFailure(authError) {
  return {
    type: AUTH_FAILURE,
    authError,
  };
}

export function authFailureRemove() {
  return {
    type: AUTH_FAILURE_REMOVE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function facebookLogin() {
  return (dispatch) => {
    dispatch(authStarted());
    const successValues = [];
    facebookLoginAPI()
    .then((facebookAuthResult) => {
      successValues.push(facebookAuthResult.accessToken);
      return getFacebookInfoAPI(facebookAuthResult.accessToken);
    })
    .then((facebookProfile) => {
      successValues.push(facebookProfile);
      return getServerAuthToken();
    })
    .then((serverAuthToken) => {
      successValues.push(serverAuthToken);
      dispatch(authSuccess(...successValues));
    })
    .catch((error) => {
      dispatch(authFailure(error));
      setTimeout(() => {
        dispatch(authFailureRemove());
      }, 4000);
    });
  };
}
