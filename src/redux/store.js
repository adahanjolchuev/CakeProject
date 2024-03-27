import { combineReducers, createStore } from "redux";
import { AdminAction } from "./reducer/adminAction";
import { ReviewsAction } from "./reducer/reviews";
import OrderAction from "./reducer/orderAction";



export const store = createStore(combineReducers({
    cake: AdminAction,
    reviews : ReviewsAction,
    order : OrderAction,
}))