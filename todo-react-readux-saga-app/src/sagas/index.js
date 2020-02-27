import { all } from 'redux-saga/effects';
import watchAddTodoAsync from './addTodoSaga';
import watchfetchInitialTodos from './fetchInitialTodoSaga';

export default function* rootSaga() {
  yield all([watchAddTodoAsync(), watchfetchInitialTodos()]);
}
