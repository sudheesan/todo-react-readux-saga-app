import { put, takeLatest } from 'redux-saga/effects';
import { ADD_TODO_ASYNC } from '../actions/actionTypes';
import { addTodo } from '../actions/todoAction';
import delay from '../utils/delay';

export const addTodoAsync =  function*() {
  const response = yield fetch('https://reqres.in/api/users/1');
  const apiResponce = yield response.json();
  const newTodo = apiResponce.data.first_name;
  yield delay(2000);
  yield put(addTodo(newTodo));
  
};

export default function* watchAddTodoAsync() {
  yield takeLatest(ADD_TODO_ASYNC, addTodoAsync);
}
