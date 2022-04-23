import { combineReducers } from "redux";
import { productReducer, productsReducer, categoriesReducer } from "./reducer";

const reducers = combineReducers({
    productsReducer,
    productReducer,
    categoriesReducer
})

export default reducers