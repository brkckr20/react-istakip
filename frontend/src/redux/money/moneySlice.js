import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveMoney } from './services'

export const save = createAsyncThunk("money/save", saveMoney)

const moneySlice = createSlice({
    name: "money",
    initialState: {
        test: 1,
        loading: true
    },
    reducers: {},
    extraReducers: {
        [save.fulfilled]: (state, action) => {
            console.log(action.payload)
        }
    }
})

export default moneySlice.reducer