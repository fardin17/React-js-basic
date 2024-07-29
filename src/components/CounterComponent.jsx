import { useState } from "react";

const CounterComponent = ({ buttonName, setTotalCountValue }) => {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount((prev) => prev + 1);
    setTotalCountValue((prev) => prev + 1);
  };

  return (
    <div>
      <button className="counter-button" onClick={handleCounter}>
        {buttonName}
      </button>
      <p>{count}</p>
    </div>
  );
};

export default CounterComponent;
