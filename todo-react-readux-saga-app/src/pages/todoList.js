import React from 'react';
import { connect } from 'react-redux';
import { fetchInitialTodos } from '../actions/todoAction';

function TodoList({ todos }) {
  return (
    <>
      {todos.map(todo => (
        <p>{todo}</p>
      ))}
    </>
  );
}
const mapStateToProps = state => {
  const newState = state.todoReducer.toJS();
  console.log(newState);
  return {
    todos: newState.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialTodos: () => {
      dispatch(fetchInitialTodos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
