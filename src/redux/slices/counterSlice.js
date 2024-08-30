import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
