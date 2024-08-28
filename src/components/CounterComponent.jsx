import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

const Counter = () => {
  // const [count, setCount] = useState({ value: 0 });

  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment Counter</button>

      <button onClick={() => dispatch(decrement())}>Decrement Counter</button>

      <p>Count:{count}</p>
    </div>
  );
};

export default Counter;
