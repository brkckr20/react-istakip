import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, logout } from './services';

const user = JSON.parse(localStorage.getItem("is_takip"));

export const loginUser = createAsyncThunk("auth/login", login);
export const registerUser = createAsyncThunk("auth/register", register);
export const logoutUser = createAsyncThunk("auth/logout", logout);

const initialState = {
    user: user ? user : null,
    errorMessage: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    registerSuccess: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.rejected]: (state, action) => {
            console.log(action.payload);
        },
        [loginUser.fulfilled]: (state, action) => {
            if (action.payload.code === "auth/user-not-found") {
                state.isError = true;
                state.errorMessage = action.payload.code;
            } else {
                state.user = action.payload;
            }
        },

        /* REGISTER */
        [registerUser.fulfilled]: (state, action) => {
            state.registerSuccess = true
        },


        /* LOGOUT */
        [logoutUser.fulfilled]: (state, action) => {
            state.user = null
        }
    }
})


export default authSlice.reducer