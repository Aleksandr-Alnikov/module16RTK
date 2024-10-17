import {ADD_ITEM, FILTER_ITEM, REMOVE_ITEM, SET_FILTER} from "./types.js";

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const filterItem = (id) => ({
    type: FILTER_ITEM,
    payload: id,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});