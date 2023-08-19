import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, isAuthenticated: true};
    case LOGIN_FAILURE:
      return {...state, isAuthenticated: false};
    default:
      return state;
  }
};

export default authReducer;
