// reducer is a function which accept function and parameters and returns new state;

import { BUY_CAKE } from "./cakeTypes";


//state
const intialState = { numOfCakes: 10 };


//reducer
const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
export default cakeReducer;
