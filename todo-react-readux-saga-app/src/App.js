import React from 'react';
import './App.css';
import TodoLis from './pages/todoList';
import AddTodo from './pages/addTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TODO APP
        </p>
      </header>
      <TodoLis></TodoLis>
      <AddTodo></AddTodo>
    </div>
  );
}


export default (App);
