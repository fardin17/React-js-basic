import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todo-context";

const Todoform = () => {
  
  const {todoList, dispatch } = useContext(TodoContext)
  const [todoFormState, setTodoFormState] = useState({

    title: "",
    description: "",
  });


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodoFormState({
      ...todoFormState,
      [name]: value,
    });
  };

  const addTodo = () => {
    dispatch({type:'add_todo', payload:todoFormState})
    setTodoFormState({
      title: "",
      description: "",
    });
  };
  return (
    <div>
      <input
        name="title"
        value={todoFormState?.title||''}
        onChange={onChangeHandler}
      />
      <input
        name="description"
        value={todoFormState?.description||''}
        onChange={onChangeHandler}
      />
      <button onClick={addTodo}> { "Add"} </button>
    </div>
  );
};

export default Todoform;
