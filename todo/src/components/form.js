import React, {useState} from 'react';

function Form(props) {

 const [inputValue, updateValue]= useState();

 const handleChange = e => {
     //as the user types in the input field the value of state will update 
     updateValue(e.target.value);
 }

  const handleSubmit = e => {
      e.preventDefault();
      console.log("submitted", props);
      props.dispatch({type: "ADD_TODO", payload: inputValue});

  }
  return (
    <form className="add-task">
        <label for="item">Add a task</label>
        <input onChange={handleChange} type="text" id="item" name="item"/>
        <button onClick={handleSubmit} type="button">Add</button>
     
    </form>
  );
}

export default Form;
