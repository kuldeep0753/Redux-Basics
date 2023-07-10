import BUY_CHIPS from "./chipsTypes";
//intial state

const chipsState = {
  numOfChips: 0,
};

//chips Reducer
const chipsReducer = (state = chipsState, action) => {
  switch (action.type) {
    case BUY_CHIPS:
      return {
        ...state,
        numOfChips: state.numOfChips + 1,
      };
    default:
      return { ...state };
  }
};
export default chipsReducer;
