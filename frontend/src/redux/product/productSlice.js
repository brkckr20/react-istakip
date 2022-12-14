import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { newProduct, getAllProducts, removeProduct } from "./services";

export const productSave = createAsyncThunk('product/save', newProduct);
export const getProduct = createAsyncThunk("product/getAll", getAllProducts);
export const productRemove = createAsyncThunk("product/remove", removeProduct)

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        isSuccess: false,
        products: [],
    },
    reducers: {},
    extraReducers: {
        [productSave.pending]: (state, action) => {
            state.isLoading = true
        },
        [productSave.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        },
        [getProduct.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [productRemove.pending]: (state, action) => {
            state.isLoading = true;
        },
        [productRemove.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = [action.payload]
        }
    }
})

export default productSlice.reducer;