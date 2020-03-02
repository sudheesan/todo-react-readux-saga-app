import { ADD_TODO, FETCH_INITIAL_TODOS } from '../actions/actionTypes';
import { createSelector } from 'reselect';

const { Map, List } = require('immutable');

const initialState = Map({ todos: List(['get up', 'to work', 'go home']) });

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.updateIn(['todos'], todos => todos.push(action.payload));
    case FETCH_INITIAL_TODOS:
      return {
        ...state,
        todos: [...action.payload]
      };
    default:
      return state;
  }
};

export const todoSelector = state => state.todos;

export const nonEmptyTodoSelector = createSelector([todoSelector], todos=>{
  return todos.filter((todo) => todo.length > 1);

});

export default todoReducer;
