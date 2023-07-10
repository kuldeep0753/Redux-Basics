// console.log("vdj");
// import {createStore} from "redux";
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;

//Middleware
const reduxLogger=require('redux-logger');
const logger=reduxLogger.createLogger();
const applyMiddleware=redux.applyMiddleware;

// type of action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creator is a function which returns action
function buyCake() {
  // below we define the action in object format
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  // below we define the action in object format
  return {
    type: BUY_ICECREAM,
    info: "First redux action for icecream",
  };
}

//state of application.
// const intialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };
const intialCakeState = {
    numOfCakes: 10,
  };
  const intialIceCreamState = {
    numOfIceCreams: 20,
  };

//(prevState,action)=>newState;
// const reducer = (state = intialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };
const cakeReducer = (state = intialCakeState, action) => {
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
  const iceCreamReducer = (state = intialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1,
        };
      default:
        return state;
    }
  };



//1.Redux Store Holds the application state
const rootReducer=combineReducers({
    cake:cakeReducer,
iceCream:iceCreamReducer,    
})

//add applyMiddleware at store
const store = createStore(rootReducer,applyMiddleware(logger));
// console.log(store);

//2.Redux Store Allow access to state via getState()
console.log("Initial State", store.getState());

//3.Redux Store register listeners via subscribe(listener)
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

//4.Redux store allow state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

//5.Redux store unsubscribe
unsubscribe();
