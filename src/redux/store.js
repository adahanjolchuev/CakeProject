import { combineReducers, createStore } from "redux";
import { adminAction } from "./reducer/adminAction";



export const store = createStore(combineReducers({
    cake: adminAction
}))