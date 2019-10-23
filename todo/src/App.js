import React, { useReducer, useState} from 'react';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
import reducer from './reducers/reducer.js';
import {initialState} from  './reducers/reducer.js';
import {StateContext} from './contexts/context.js';
import './App.css';

function App() {
  
  const [todoList, addTodoList ] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, todoList);


  return(
          <div className="App">
                <StateContext.Provider value={state}>
                        <h1>Todo App</h1>
                        <Form dispatch={dispatch}/>
                        <TodoList/>
                </StateContext.Provider>

          </div>

  );
}

export default App;
