import { memo, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { CounterContext } from "../context/counter-context";


const CounterComponent = ({ buttonName }) => {
  const {count,handleCounter}= useContext(CounterContext)
  // const [count, setCount] =useState(0)
console.log({count, handleCounter})

  return (
    <div>
      <button className="counter-button" onClick={handleCounter}>
      {`${buttonName}`}
      </button>
      <p>State Value: {count}</p>
      
    </div>
  );
};

export default memo(CounterComponent);
