import "./App.css";
import ClassComponent from "./components/ClassComponent";
import Todo from "./todo";
import TodoContextProvider from "./context/todo-context";
import FunctionalComponent from "./components/FunctionalComponent";
import CounterContextProvider from "./context/counter-context";
function App() {
  return (
    <div>
      <ClassComponent />
      <CounterContextProvider> 
        <FunctionalComponent />
      </CounterContextProvider>
      {/* <TodoContextProvider>
        {" "}
        <Todo />
      </TodoContextProvider> */}
    </div>
  );
}

export default App;
