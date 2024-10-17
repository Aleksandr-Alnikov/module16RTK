import {createStore} from "redux";
import {itemsReducers} from "./reducer.js";
import {composeWithDevTools} from "@redux-devtools/extension";

export const store = createStore(itemsReducers, composeWithDevTools());