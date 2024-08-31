import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  count: 0,
};
export const asyncIncrement = createAsyncThunk("counter/asyncIncrement", async (value) => {
  await new Promise((resolve, rejected) =>
    setTimeout(() => {
      value < 3 ? resolve() : rejected();
    }, 3000)
  );
  return value;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncIncrement.pending, () => {
        console.log("async increment is pending");
      })
      .addCase(asyncIncrement.fulfilled, (state, action) => {
        state.count += action.payload;
      })
      .addCase(asyncIncrement.rejected, () => {
        console.log("async increment is rejected");
      });
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
