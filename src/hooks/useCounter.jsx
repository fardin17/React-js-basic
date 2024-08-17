import { useState } from "react";


const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    
    const increaseCount =()=>{
        setCount(prev=>prev+1)
    }
    return [count, increaseCount]
}

export default useCounter;
