import { put, takeLatest, all } from 'redux-saga/effects';
import { ADD_TODO_ASYNC } from '../actions/actionTypes';
import { addTodo } from '../actions/addTodoAction';

export const addTodoAsync =  function*() {
  const response = yield fetch('https://reqres.in/api/users/1');
  const apiResponce = yield response.json();
  const newTodo = apiResponce.data.first_name;
  yield put(addTodo(newTodo));
};

export function* watchAddTodoAsync() {
  yield takeLatest(ADD_TODO_ASYNC, addTodoAsync);
}

export default function* rootSaga() {
  yield all([watchAddTodoAsync()]);
}
