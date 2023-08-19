import {put, takeLatest, call} from 'redux-saga/effects';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../actions/postActions';

export function* fetchPostsSaga(): Generator {
  try {
    const response: any = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/posts',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = yield response.json();
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(
      fetchPostsFailure('Error fetching posts. Please try again later.'),
    );
  }
}

export default function* watchFetchPosts() {
  yield takeLatest(fetchPostsRequest, fetchPostsSaga);
}
