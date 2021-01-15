import {put, takeEvery, all} from 'redux-saga/effects';
import {TODO_LIST} from '../../../res/data/todo';
import {DataActionNames} from '../action/action.types';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(2000);
  yield put({
    type: DataActionNames.SET_TODO_LIST,
    listTodo: TODO_LIST,
  });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(DataActionNames.LOAD_TODO_LIST, incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
