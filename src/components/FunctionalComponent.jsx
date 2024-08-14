import { useCallback, useContext, useEffect, useState } from "react";
import CounterComponent from "./CounterComponent";
import { CounterContext } from "../context/counter-context";

function FunctionalComponent() {
  const [totalCountValue, setTotalCountValue] = useState(0);
  const {count}=useContext(CounterContext)
  let buttonNames = ["Counter-1", "Counter-2", "Counter-3"];

  const handleTotalCounter = useCallback(
    ()=>
      setTotalCountValue(prev=>prev+1),
    [])
  const [ theme, setTheme] = useState('white')

  useEffect(()=>{
if(count===5)setTheme('dark')
  else setTheme('white')
  },[count])

  return (
    <div className={`${theme=='dark'?'bg-blue':'bg-red' } counter`}>
      {/* Conditional rendering to display Total Count or a message */}
      {totalCountValue ? <h2>Total Count: {totalCountValue}</h2> : <h2>No value added</h2>}

      {/* Mapping over buttonNames array to render CounterComponent for each button */}
      {buttonNames.map((buttonName, index) => (
        <CounterComponent key={index} {...{handleTotalCounter, buttonName }} />
      ))}
    </div>
  );
}

export default FunctionalComponent



