import { REHYDRATE } from 'redux-persist/constants';
import {
  AUTH_STARTED,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_FAILURE_REMOVE,
  LOGOUT,
} from '../actions/auth';

const initialState = {
  authenticating: false,
  authToken: null,
  authError: null,
  facebookToken: null,
  facebookProfile: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE :
      if (action.payload.auth &&
          action.payload.auth.authenticating &&
          !action.payload.auth.authToken) {
        return Object.assign({}, state, {
          authenticating: false,
          authToken: null,
          facebookToken: null,
          facebookProfile: null,
          authError: null,
          welcomeText: null,
        });
      }
      return Object.assign({}, state, action.payload.auth, {
        authError: null,
      });
    case AUTH_STARTED :
      return Object.assign({}, state, {
        authenticating: true,
        welcomeText: 'One sec...',
      });
    case AUTH_SUCCESS :
      return Object.assign({}, state, {
        authenticating: false,
        authToken: action.authToken,
        facebookToken: action.facebookToken,
        facebookProfile: action.facebookProfile,
      });
    case AUTH_FAILURE :
      return Object.assign({}, state, {
        authenticating: false,
        authError: action.authError.message,
      });
    case AUTH_FAILURE_REMOVE :
      return Object.assign({}, state, {
        authError: null,
      });
    case LOGOUT :
      return Object.assign({}, state, {
        authenticating: false,
        authToken: null,
        facebookToken: null,
        facebookProfile: null,
        welcomeText: null,
      });
    default:
      return state;
  }
}

export default authReducer;
