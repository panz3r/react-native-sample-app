import { combineReducers } from 'redux';

// ACTION TYPES

const USER_LOGIN = 'state/user/login';
const USER_LOGIN_SUCCESS = 'state/user/login/success';
const USER_LOGIN_FAILURE = 'state/user/login/failure';

export const USER_LOGOUT = 'state/user/logout';

// ACTIONS

// ACTION CREATORS

export const userLoginSuccess = token => ({
  type: USER_LOGIN_SUCCESS,
  payload: token
});

export const userLoginFailed = error => ({
  type: USER_LOGIN_FAILURE,
  payload: error
});

export const userLogout = () => ({
  type: USER_LOGOUT
});

// THUNKS

// REDUCERS

const token = (state = '', { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return payload;

    case USER_LOGIN:
    case USER_LOGIN_FAILURE:
    case USER_LOGOUT:
      return '';

    default:
      return state;
  }
};

export default combineReducers({
  token
});

// SELECTORS

export const getUserToken = state => state.user.token;

export const isAuthenticated = state => (getUserToken(state) ? true : false);
