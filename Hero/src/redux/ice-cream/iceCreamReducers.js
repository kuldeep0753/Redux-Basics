import { BUY_ICE_CREAM } from "./iceCreamTypes";

//initial state
const initialIceCreamState = {
  numOfIceCream: 20,
};

//icecream reducer

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
