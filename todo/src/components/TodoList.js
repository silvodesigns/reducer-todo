import React from 'react';
import Todo from './Todo';

function TodoList(props){

    return(
         props.todoList.map(item => <Todo item={item}/> )
    )
              

}

export default TodoList;