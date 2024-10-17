import {createSlice} from "@reduxjs/toolkit";


const itemSlice = createSlice({
    name: 'item',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        toggleItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
        },
    },
});


export const {addItem, removeItem, toggleItem} = itemSlice.actions;
export default itemSlice.reducer;