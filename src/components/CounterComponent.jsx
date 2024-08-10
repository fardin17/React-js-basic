import { memo, useEffect, useMemo, useReducer, useRef, useState } from "react";

const CounterComponent = ({ buttonName },ref) => {
  const [count, setCount] =useState(0)
  const myref = useRef(null)
  const inputref = useRef(null)
  const value = useRef(false)
useEffect(()=>{
  if(!count){  
    console.log('Counter Component Rendered')
    setCount(1)
  }
  // console.log(myref.current)
},[])
const handleCounter =()=>{
  // setCount(prev=>prev+1)
  value.current= value.current+1
  console.log(value.current)
}
// console.log(value.current)
  return (
    <div>
      <button className="counter-button" onClick={handleCounter}>
      {`${buttonName}`}
      </button>
      <p>State Value: {count}</p>
      <p>Ref value: {value.current}</p>
      <input ref={inputref}/>
      <div ref={myref}> Hello World</div>
      
    </div>
  );
};

export default memo(CounterComponent);
