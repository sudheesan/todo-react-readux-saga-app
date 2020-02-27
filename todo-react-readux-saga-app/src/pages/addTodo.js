import React from 'react';
import { connect } from 'react-redux';
import { addTodoAsync } from '../actions/addTodoAction';

function AddTodo({ addTodoAsync }) {
  return (
    <div>
      <button
        onClick={e => {
          addTodoAsync();
        }}>
        Add New Todo
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoAsync: () => {
      dispatch(addTodoAsync());
    }
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
