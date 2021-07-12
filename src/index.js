import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import App from "./components/App";




const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);

