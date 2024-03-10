import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slice"; 
import locationReducer from './slices/city.slice';
import namazReducer from './slices/namaztime.slice';

const store =  configureStore({
    reducer : {
        theme : themeReducer ,
        location : locationReducer,
        namaz: namazReducer,
    }
})

export default store ;  