import {
  ADD_TODO,
  SET_INITIAL_TODOS,
  FETCH_INITIAL_TODOS,
  ADD_TODO_ASYNC
} from '../actions/actionTypes';
import { createSelector } from 'reselect';

const { Map, List } = require('immutable');

const initialState = Map({ todos: List([]), isTodolistLoading: false });

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ASYNC:
      return state.set('isTodolistLoading', true);
    case ADD_TODO:
      state = state.updateIn(['todos'], todos => todos.push(action.payload));
      state = state.set('isTodolistLoading', false);
      return state;
    case FETCH_INITIAL_TODOS:
      return state.set('isTodolistLoading', true);
    case SET_INITIAL_TODOS:
      state = state.set('todos', List(action.payload));
      state = state.set('isTodolistLoading', false);
      return state;
    default:
      return state;
  }
};

export const todoSelector = state => state.todos;

export const nonEmptyTodoSelector = createSelector([todoSelector], todos => {
  return todos.filter(todo => todo.length > 1);
});

export default todoReducer;
