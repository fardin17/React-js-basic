import { configureStore } from "@reduxjs/toolkit";
import CounterSlice, { counterSlice } from "./slices/counterSlice";
import { jsonPlaceholderApi } from "./jsonplaceholderApi";

export const rtkStore = configureStore({
  reducer: {
    [counterSlice.name]: CounterSlice,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});
