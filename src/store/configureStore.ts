import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../reducers/authReducer';
import loginSaga from '../sagas/loginSaga';
import postReducer from '../reducers/postReducer';
import postSaga from '../sagas/postSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
});

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the saga middleware
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(postSaga);

export default store;
