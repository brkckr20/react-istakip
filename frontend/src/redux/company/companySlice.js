import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { save, getAll } from './services';

export const saveCompany = createAsyncThunk('company/save', save);
export const getAllCompany = createAsyncThunk('company/save', getAll);

const initialState = {
    isSuccess: false,
    isLoading: false,
    companies: []
}

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers: {
        [saveCompany.pending]: (state, action) => {
            state.isLoading = true
        },
        [saveCompany.fulfilled]: (state, action) => {
            state.isLoading = false
        },
        [getAllCompany.fulfilled]: (state, action) => {
            state.companies = action.payload
            state.isLoading = false
        },
        [getAllCompany.pending]: (state, action) => {
            state.isLoading = true
        },
    }
})

export default companySlice.reducer;