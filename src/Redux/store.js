import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { LogReducer } from "./Login_Redux/LoginReducer";



const rootReducer=combineReducers({LogReducer})
export const store=createStore(rootReducer,applyMiddleware(thunk))