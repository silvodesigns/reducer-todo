import React, {useContext} from 'react';
import Todo from './Todo';
import {StateContext} from '../contexts/context.js';

function TodoList(props){

    const data = useContext(StateContext);


    return(
         data.map(item => <Todo item={item}/> )
       
    )
              

}

export default TodoList;