import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productInitialState = {
  data: [],
  status: "idle",
  error: "",
};

export const asyncProductAdd = createAsyncThunk("product/asyncProductAdd", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return response.json();
});

export const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    addProduct: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncProductAdd.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncProductAdd.fulfilled, (state, action) => {
        const apiProduct = action.payload[state.data.length + 1];
        const newProduct = {
          id: apiProduct.id,
          title: apiProduct.title,
          description: apiProduct.title,
          image: apiProduct.url,
        };
        state.status = "complete";
        state.data = [...state.data, newProduct];
      })
      .addCase(asyncProductAdd.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
