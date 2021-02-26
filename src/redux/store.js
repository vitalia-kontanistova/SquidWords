import { applyMiddleware, combineReducers, createStore } from "redux";
import dictionariesReducer from "../redux/dictionaries_reducer";
import wordsReducer from "./words_reducer";
import headerReducer from "./header_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  dictionaries: dictionariesReducer,
  words: wordsReducer,
  header: headerReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
