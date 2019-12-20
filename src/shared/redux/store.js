import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import apiMiddleware from "./middleware";
import postReducer from "../../Posts/reducer/postReducer";

const store = createStore(postReducer, applyMiddleware(apiMiddleware, thunk));

export default store;
