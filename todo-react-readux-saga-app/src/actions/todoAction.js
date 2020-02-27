import {
  ADD_TODO,
  ADD_TODO_ASYNC,
  FETCH_INITIAL_TODOS,
  SET_INITIAL_TODOS,
} from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const addTodoAsync = () => ({
  type: ADD_TODO_ASYNC,
  payload: null
});

export const fetchInitialTodos = () => ({
  type: FETCH_INITIAL_TODOS,
  payload: null
});

export const setInitialTodos = todos => ({
  type: SET_INITIAL_TODOS,
  payload: todos
});
