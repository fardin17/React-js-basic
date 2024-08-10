import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  console.log('app component rendered')
  return (
    <div>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
