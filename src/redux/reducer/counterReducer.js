
const initialState = {
    count:0
}
export const counterReducer = (state=initialState, action)=>{
  switch (action.type) {
    case 'increment':
        return {
            ...state,
            count:state.count+action.payload
        }
  
    case 'decrement':
        return {
            ...state,
            count:state.count-1
        }
    default:
      return  state
  }
}