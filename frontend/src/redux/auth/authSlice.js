import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login,register } from './services';

const user = JSON.parse(localStorage.getItem("onur_login"));

export const loginUser = createAsyncThunk("auth/login", login);
export const registerUser = createAsyncThunk("auth/register", register)

const initialState = {
    user: user ? user : null,
    errorMessage: "",
    isLoading: false,
    isSuccess: false,
    registerSuccess : false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.rejected]: (state, action) => {
            console.log(action.payload);
        },

        /* REGISTER */
        [registerUser.fulfilled] : (state,action) => {
            state.registerSuccess = true
        }
    }
})


export default authSlice.reducer