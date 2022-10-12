import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import companySlice from './company/companySlice';


export const store = configureStore({
    reducer: {
        auth: authSlice,
        company: companySlice
    }
})