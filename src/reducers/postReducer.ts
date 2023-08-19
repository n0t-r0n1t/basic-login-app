import {FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: true,
  error: null,
};

const postReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {...state, posts: action.payload, loading: false, error: null};
    case FETCH_POSTS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default postReducer;
