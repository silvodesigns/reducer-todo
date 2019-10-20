import React, { useReducer, useState} from 'react';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
import reducer from './reducers/reducer.js';
import {initialState} from  './reducers/reducer.js';
import './App.css';

function App() {
  
  const [todoList, addTodoList ] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, todoList);
  console.log(state);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form dispatch={dispatch}/>
      <TodoList todoList={state}/>
    </div>
  );
}

export default App;
