export const logger =store=>next=>action=>{
   console.log('prevState', store.getState())
   let result = next(action)
   console.log('nextState', store.getState())
   return result
} 