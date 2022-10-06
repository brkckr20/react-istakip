import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './services';

const user = JSON.parse(localStorage.getItem("onur_login"));

export const loginUser = createAsyncThunk("auth/login", login)

const initialState = {
    user: user ? user : null,
    errorMessage: "",
    isLoading: false,
    isSuccess: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {}
})


export default authSlice.reducer