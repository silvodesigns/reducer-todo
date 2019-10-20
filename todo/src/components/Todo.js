import React, {useState} from  'react';

function Todo(props){

    const [state, setState] = useState(props.item.completed);
   
    const handleClick = e => {
       if(state == false){
           setState(true);
       } else {
           setState(false);
       }
    }


    return(
        <p className={state == true ? ".completed" : ""} onClick={handleClick}>{props.item.item}</p>

    )


}

export default Todo;