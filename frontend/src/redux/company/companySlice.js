import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from './services';

export const getAllCompany = createAsyncThunk('company/save', getAll);

const initialState = {
    isSuccess: false,
    isLoading: true,
    companies: []
}

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCompany.fulfilled]: (state, action) => {
            state.isLoading = false
            state.companies = action.payload
            
        },
    }
})

export default companySlice.reducer;