import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice.js";
import filterSlice from "./filterSlice.js";


export const store = configureStore({
    reducer: {
        item: itemSlice,
        filter: filterSlice,
    },
});