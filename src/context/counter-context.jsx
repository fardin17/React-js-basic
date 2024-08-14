
import { createContext, useState } from "react";
import CounterComponent from "../components/CounterComponent";

export const CounterContext= createContext({})

const CounterContextProvider=({children})=>{
    const [count, setCount]=useState(0)
    const handleCounter=()=>{
        setCount(prev=>prev+1)
    }
   return (
   <CounterContext.Provider value={{count,handleCounter}}>
   {children}
   </CounterContext.Provider>)
}
export default CounterContextProvider