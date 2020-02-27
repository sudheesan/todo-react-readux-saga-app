import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(TodoList);
