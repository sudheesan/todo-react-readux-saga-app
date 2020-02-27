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
  return {
    todos: state.todoReducer.todos
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
