import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAll } from './services';

export const getAllCompany = createAsyncThunk('company/save', getAll);

export const createCompany = createAsyncThunk("company/create", async (input) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/company`, input)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

export const removeCompany = createAsyncThunk("company/remove", async (id) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/company/${id}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})


const initialState = {
    isSuccess: false,
    isLoading: false,
    companies: [],
    selectCompany: ""
}

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers: {
        [createCompany.pending]: (state) => {
            state.isLoading = true;
        },
        [createCompany.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.companies = [action.payload];
        },
        [removeCompany.pending]: (state) => {
            state.isLoading = true;
        },
        [removeCompany.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.companies = [action.payload];
        },
        [getAllCompany.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCompany.fulfilled]: (state, action) => {
            state.companies = action.payload
            const val = action.payload;
            state.selectCompany = val[0]?.slug
            state.isLoading = false;

        },
    }
})

export default companySlice.reducer;