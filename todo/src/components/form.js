import React, {useState} from 'react';

function Form(props) {

 const [inputValue, updateValue]= useState();

 const handleChange = e => {
     //as the user types in the input field the value of state will update 
     updateValue(e.target.value);
 }

  const handleAdd = e => {
      e.preventDefault();
      props.dispatch({type: "ADD_TODO", payload: inputValue});

  }

  const handleCompleted = e => {
    e.preventDefault();
    let toSearch = document.getElementsByClassName("completed");
    let converted = Array.from(toSearch);
    converted.forEach(function(element) {
      element.remove();
    });


}
  return (
    <form className="add-task">
        <label for="item">Add a task</label>
        <input onChange={handleChange} type="text" id="item" name="item"/>
        <button onClick={handleAdd} type="button">Add</button>
        <button onClick={handleCompleted} type="button">clear completed</button>

     
    </form>
  );
}

export default Form;
