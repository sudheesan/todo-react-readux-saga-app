import {ADD_TODO, ADD_TODO_ASYNC} from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const addTodoAsync = () => ({
  type: ADD_TODO_ASYNC,
  payload: null
});