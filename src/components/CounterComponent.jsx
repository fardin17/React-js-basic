import { memo, useState } from "react";
import useCounter from "../hooks/useCounter";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import useWindowResize from "../hooks/useWindowResize";

const CounterComponent = ({ buttonName }) => {
  // const { count, handleCounter } = useContext(CounterContext);
  // console.log({ count, handleCounter });
  // const [ count , setCount]= useState(0)
  // const [count, increaseCount] = useCounter(0);
  const [count, increaseCount] = useLocalStorage("count", 0);
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [window] = useWindowResize();
  console.log({ window });
  if (loading) return <div> Loading.....</div>;
  else if (error) return <div>{error}</div>;
  // else if (data) return <div>{JSON.stringify(data)}</div>;
  console.log({ loading, error, data });
  // console.log(window.innerHeight, window.innerWidth);
  return (
    <div>
      <button className="counter-button" onClick={increaseCount}>
        {`${buttonName}`}
      </button>
      <p>State Value: {count}</p>
    </div>
  );
};

export default memo(CounterComponent);
