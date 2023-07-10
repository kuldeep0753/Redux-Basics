import {createStore,applyMiddleware} from "redux";//ES6 import syntax 
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
// import cakeReducer from "./cakes/cakeReducer";
import rootReducer from "./rootReducer";

 
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
export default store;


  
