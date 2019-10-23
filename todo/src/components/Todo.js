import React, {useState} from  'react';

function Todo(props){

    const [state, setState] = useState(props.item);
    const {completed, item, id }= state;
   
    const handleClick = e => {
       e.preventDefault();
       setState({item: item, id: id, completed: !completed});
    }


    return(
        <p className={state.completed === false ? "" : "completed"} onClick={handleClick}>{state.item}</p>

    )


}

export default Todo;