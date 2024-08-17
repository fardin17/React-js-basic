import { useContext, useState } from "react";
import { TodoContext } from "../context/todo-context";

const Todolist = () => {
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
  const updateTodo = () => {
    dispatch({ type: "update_todo", payload: todoFormState });
    setTodoFormState({
      title: "",
      description: "",
    });
  };
  const { todoList, dispatch } = useContext(TodoContext);

  return (
    <div>
      {todoList?.map((todo, index) => {
        return (
          <div key={index} className="todo-list">
            {!!todoFormState.title && todo?.id === todoFormState.id ? (
              <div>
                <input
                  name="title"
                  value={todoFormState?.title || ""}
                  onChange={onChangeHandler}
                />
                <input
                  name="description"
                  value={todoFormState?.description || ""}
                  onChange={onChangeHandler}
                />
                <button onClick={updateTodo}> {"Update"} </button>
              </div>
            ) : (
              <div>
                <p>{todo?.title} </p>
                <p>{todo?.description} </p>
              </div>
            )}

            <p
              onClick={() =>
                setTodoFormState(todoList?.find((t) => t.id === todo?.id))
              }
            >
              Edit
            </p>
            <p
              onClick={() =>
                dispatch({ type: "delete_todo", payload: todo.id })
              }
            >
              Delete
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
