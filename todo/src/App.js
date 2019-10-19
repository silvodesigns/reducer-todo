import React, { useReducer } from 'react';
import './App.css';

//My state holding my list of TODOs
const initialState = [
  
  {
    item: 'Learn about reducers',
    completed: false,
    id: 1
  }

]

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todo: action.payload};
    default:
      return state;
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <h1>Todo App</h1>
      {state.map(item => <p>{item.item}</p>)}
    </div>
  );
}

export default App;
