import { createStore, applyMiddleware } from "redux";
import apiMiddleware from "./middleware";
import postReducer from "../../Posts/reducer/postReducer";

const store = createStore(postReducer, applyMiddleware(apiMiddleware));

export default store;
