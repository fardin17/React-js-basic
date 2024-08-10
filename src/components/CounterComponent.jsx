import { memo, useMemo, useReducer, useState } from "react";

const CounterComponent = ({ buttonName }) => {
  const reducer=(state,action)=>{
    switch(action.type){
      case 'increment': return {...state, count:state.count+1}
      
      case 'decrement': return {...state, count:state.count-1}

      case 'IncrementByPayload':return {...state, count:state.count+action.payload}

      default:
        return state
    }
  }
  const [countValue, dispatch] = useReducer(reducer,{count:0});

  return (
    <div>
      <button className="counter-button"
       onClick={()=>dispatch({type:'increment'})}>
      {`Increment ${buttonName}`}
      </button>
      <button className="counter-button"
       onClick={()=>dispatch({type:'decrement'})}>{`Decrement ${buttonName}`}</button>
      <button className="counter-button"
       onClick={()=>dispatch({type:'IncrementByPayload', payload:5})}>{`IncrementBy5 ${buttonName}`}</button>
      <p>{countValue.count}</p>
      <br/>
       <p>{countValue.count}</p>
    </div>
  );
};

export default memo(CounterComponent);
