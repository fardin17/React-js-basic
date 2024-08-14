import { useContext } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import CounterContextProvider, { CounterContext } from "./context/counter-context";
import Todo from './todo'
import TodoContextProvider from "./context/todo-context";
function App() {
  
  return (
    <div >
      <ClassComponent />
      {/* <CounterContextProvider> 
        <FunctionalComponent />
      </CounterContextProvider> */}
      <TodoContextProvider> <Todo/></TodoContextProvider>
    
    </div>
  );
}

export default App;
