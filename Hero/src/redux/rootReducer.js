import { combineReducers  } from "redux";
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from "./ice-cream/iceCreamReducers";
import chipsReducer from "./chips/chipsReducer";

const rootReducer= combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    chips: chipsReducer

})
export default rootReducer; 