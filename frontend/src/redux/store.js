import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import companySlice from './company/companySlice';
import productSlice from './product/productSlice';
import moneySlice from './money/moneySlice';


export const store = configureStore({
    reducer: {
        auth: authSlice,
        company: companySlice,
        product: productSlice,
        money : moneySlice
    }
})