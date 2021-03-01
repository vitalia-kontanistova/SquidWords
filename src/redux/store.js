import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth_reducer";
import headerReducer from "./header_reducer";
import dictionariesReducer from "../redux/dictionaries_reducer";
import personalDictionariesReducer from "./personal_dictionaries_reducer";
import wordsReducer from "./words_reducer";
import appReducer from "./app_reducer";

let reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  header: headerReducer,
  dictionaries: dictionariesReducer,
  personalDictionaries: personalDictionariesReducer,
  words: wordsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
