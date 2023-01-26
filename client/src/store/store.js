import {configureStore, MiddlewareArray} from'@reduxjs/toolkit'
import expenseSlice from './reducer'
import { apiSlice } from './apiSlice'

export const store = configureStore({
    reducer:{
        name: expenseSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})