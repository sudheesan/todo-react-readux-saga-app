import { ADD_TODO, FETCH_INITIAL_TODOS } from '../actions/actionTypes';

const initialState = {
  todos: ['get up', 'to work', 'go home']
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case FETCH_INITIAL_TODOS:
      return {
        ...state,
        todos: [...action.payload]
      };
    default:
      return state;
  }
};
export default todoReducer;
