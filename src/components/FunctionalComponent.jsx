import { useCallback, useState } from "react";
import CounterComponent from "./CounterComponent";

function FunctionalComponent() {
  const [totalCountValue, setTotalCountValue] = useState(0);

  let buttonNames = ["Counter-1", "Counter-2", "Counter-3"];

  console.log('Functional component rendered')

  const handleTotalCounter = useCallback(
    ()=>
      setTotalCountValue(prev=>prev+1),
    [])
 
  return (
    <div className="counter">
      {/* Conditional rendering to display Total Count or a message */}
      {totalCountValue ? <h2>Total Count: {totalCountValue}</h2> : <h2>No value added</h2>}

      {/* Mapping over buttonNames array to render CounterComponent for each button */}
      {buttonNames.map((buttonName, index) => (
        <CounterComponent key={index} {...{handleTotalCounter, buttonName }} />
      ))}
    </div>
  );
}

export default FunctionalComponent;
