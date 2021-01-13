import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

import Thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store;


// Step 1: here import applymiddlerware from redux and thunk from redux thunk