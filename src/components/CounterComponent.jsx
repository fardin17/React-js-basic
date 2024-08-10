import { memo, useMemo, useState } from "react";

const CounterComponent = ({ buttonName, handleTotalCounter }) => {
  const [count, setCount] = useState(0);

  const [random, setRandom] = useState(0);
  const handleCounter = () => {
    setCount((prev) => prev + 1);
    handleTotalCounter()
  };
  function estimateCostlyValue(number){
    let result=number
    console.log('start....')
    for (let i=0; i<1000000000; i++)result+=i
    console.log('end....')
    return result
  }
const randomBigCountValue=useMemo(()=>estimateCostlyValue(count),[count])
console.log({randomBigCountValue})

  console.log(`${buttonName} component rendered`)
  return (
    <div>
      <button className="counter-button" onClick={handleCounter}>
        {buttonName}
      </button>
      <p>{count}</p>
      
      <button onClick={()=>setRandom(prev=>prev+1)}>Random</button>
      <p>{random}</p>
    </div>
  );
};

export default memo(CounterComponent);
