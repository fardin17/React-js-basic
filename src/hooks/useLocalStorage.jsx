import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [count, setCount] = useState(() => {
    const localValue = localStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : initialValue;
  });

  const increaseCount = () => {
    setCount((prev) => {
      const updatedData = prev + 1;
      localStorage.setItem(key, updatedData);
      return updatedData;
    });
  };
  return [count, increaseCount];
};

export default useLocalStorage;
