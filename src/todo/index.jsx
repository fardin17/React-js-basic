import { useState } from "react";
import Todolist from "./todolist";
import Todoform from "./todoform";

const Index = () => {
    const [todoList, setTodoList]=useState([])
    const [editId, setEditId]=useState('')

    return (
        <div>
           <p>TODO LIST APP</p> 
           <Todoform {...{todoList,setTodoList, editId,setEditId}} />
           <Todolist {...{todoList, setTodoList, setEditId}} />
        </div>
    );
}

export default Index;
