import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_INITIAL_TODOS } from '../actions/actionTypes';
import { setInitialTodos } from '../actions/todoAction';
import delay from '../utils/delay';

export const fetchInitialTodos =  function*() {
  const todos = ['get up', 'to work', 'go home'];
  yield delay(2000);
  yield put(setInitialTodos(todos));
};

export default function* watchfetchInitialTodos() {
  yield takeLatest(FETCH_INITIAL_TODOS, fetchInitialTodos);
}
