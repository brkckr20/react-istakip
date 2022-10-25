import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { newProduct } from "./services";

export const productSave = createAsyncThunk('product/save', newProduct);

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [productSave.pending]: (state, action) => {
            state.isLoading = true
        },
        [productSave.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        }
    }
})

export default productSlice.reducer;