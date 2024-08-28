import { applyMiddleware, createStore } from "redux"
import { rootReducer } from  "./reducer/rootReducer"
import { logger } from "./logger"

import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    rootReducer,
    composeWithDevTools( applyMiddleware(logger))
)