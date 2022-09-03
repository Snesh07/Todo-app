import React from "react";

const TodoList = (props) => {
    return (
        <>
            <div className="todo-style">
            <button onClick={()=>{
            props.onSelect(props.id);
            }}> - </button>
                <li> {props.text} </li>
            </div>
        </>
    );
}


export default TodoList;