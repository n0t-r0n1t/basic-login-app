import {put, takeLatest} from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from '../actions/loginActions';

function* loginSaga(action: {payload: {username: string; password: string}}) {
  // Replace these hardcoded values with your desired username and password
  const validUsername = 'admin';
  const validPassword = 'password';

  const {username, password} = action.payload;

  if (username === validUsername && password === validPassword) {
    yield put(loginSuccess());
  } else {
    yield put(loginFailure());
  }
}

export default function* watchLogin() {
  yield takeLatest(loginRequest, loginSaga);
}
