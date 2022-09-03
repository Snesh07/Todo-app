import React, { useState } from "react";
import TodoList from "./TodoList";
import './TodoList.css';

 
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const addItem = () => {
   setItems( (oldItems) =>{
    return [...oldItems, inputList];
   });
   setInputList("");
  }

  const deleteItem = (id) => {
   console.log("deleted");

   setItems( (oldItems) =>{
    return oldItems.filter((arrEle, index )  => {
      return index !== id;
    })
   });
  }

  return (
    <>
      <div className="main-container">
        <div className="item-box">
          <h1> Todo List </h1>

          <input type='text' placeholder='Add your Item'
          value={inputList}
          onChange={itemEvent}/>
          <button onClick={addItem}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            { items.map( (itemsVal, index) => {
              return <TodoList
                key={index}
                id={index}
                text={itemsVal}
                onSelect={deleteItem} /> 
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;