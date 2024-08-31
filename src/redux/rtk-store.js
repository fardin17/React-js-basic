import { configureStore } from "@reduxjs/toolkit";
import CounterSlice, { counterSlice } from "./slices/counterSlice";
import { jsonPlaceholderApi } from "./jsonplaceholderApi";
import ProductSlice, { productSlice } from "./slices/productSlice";

export const rtkStore = configureStore({
  reducer: {
    [counterSlice.name]: CounterSlice,
    [productSlice.name]: ProductSlice,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});
