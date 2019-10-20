import React, { useReducer, useState} from 'react';
import Form from './components/form.js';
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
      {state.map(item => <p key={item.id}>{item.item}</p>)}
    </div>
  );
}

export default App;
