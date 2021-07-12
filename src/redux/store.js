import {applyMiddleware, createStore} from "redux";
import stateReducer from "./stateReducer";
import districtReducer from "./districtReducer";
import { combineReducers } from "redux";
import thunk from 'redux-thunk';

const rootReducer=combineReducers({state: stateReducer,district: districtReducer});

const store=createStore(rootReducer, applyMiddleware(thunk));

export default store; 