import { configureStore } from "@reduxjs/toolkit";
import basketReducer  from "./Slices/basketRedux";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})