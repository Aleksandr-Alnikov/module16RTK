import {ADD_ITEM, FILTER_ITEM, REMOVE_ITEM, SET_FILTER} from "./types.js";

const initialState = {
    items: [],
    filter: 'all',
};

export const itemsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case FILTER_ITEM:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item),
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default: return state;
    }
};