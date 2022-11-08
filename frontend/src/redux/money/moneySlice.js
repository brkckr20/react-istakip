import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveMoney, getMoney } from './services'

export const save = createAsyncThunk("money/save", saveMoney);
export const get = createAsyncThunk("money/get", getMoney)

const moneySlice = createSlice({
    name: "money",
    initialState: {
        loading: false,
        moneys: []
    },
    reducers: {

    },
    extraReducers: {
        [save.pending]: (state, action) => {
            state.loading = true;
        },
        [save.fulfilled]: (state, action) => {
            state.loading = false;
            state.moneys = [action.payload];
        },
        [get.pending]: (state, action) => {
            state.loading = true;
        },
        [get.fulfilled]: (state, action) => {
            state.loading = false;
            state.moneys = [...action.payload]
        }
    }
})

export default moneySlice.reducer