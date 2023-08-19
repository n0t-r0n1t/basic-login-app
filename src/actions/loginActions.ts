import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from './actionTypes';

export const loginRequest = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: {username, password},
});

export const loginSuccess = () => ({type: LOGIN_SUCCESS});

export const loginFailure = () => ({type: LOGIN_FAILURE});
