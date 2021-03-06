import {combineReducers, createStore as reduxCreateStore} from "redux";
import commonData from "./Reducers/Programs";

const reducer = combineReducers({
    commonData,
});

const initialState = {};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
