import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchInitialTodos } from '../actions/todoAction';
import { nonEmptyTodoSelector } from  '../reducers/todoReducer'

import Loader from './loader';
function TodoList({ todos, fetchInitialTodos, isTodolistLoading }) {

  useEffect(() => {
    fetchInitialTodos();
  }, []);

  return (
    <>
      {todos.map((todo,index) => (
        <p key= {index}>{todo}</p>
      ))}
    {isTodolistLoading && <Loader/>}
    </>
  );
}
const mapStateToProps = state => {
  const newState = state.todoReducer.toJS();
  return {
    todos: nonEmptyTodoSelector(newState),
    isTodolistLoading: newState.isTodolistLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialTodos: () => {
      dispatch(fetchInitialTodos());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
