import { createContext, useReducer } from "react";

export const TodoContext = createContext();
const initialState = [];
const todoReducer = (state, action) => {
  const actions = {
    add_todo: [...state, { ...action.payload, id: Date.now() }],
    update_todo: [
      ...state.filter((todo) => todo.id !== action.payload.id),
      action.payload,
    ],
    delete_todo: [...state.filter((todo) => todo.id !== action.payload)],
  };

  return actions[action.type] || state
};

const TodoContextProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todoReducer, []);

  return <TodoContext.Provider value={{todoList, dispatch}}>{children}</TodoContext.Provider>;
};
export default TodoContextProvider;
