const redux = require("redux");//coming from node
const bigStore = redux.createStore;

//type of action
const slice1 = "Cake_Store";

//action creator
function buyCake() {
    console.log("check buyCake");
  return {
    type: slice1,
    info: "we have cake store",
  };
}

//state intialisation
const cakeState = {
  n: 10,
};

//cake reducer
const cakeReducer = (state = cakeState, action) => {
    console.log("line 23",state,action);
  switch (action.type) {
    case slice1:
      return { ...state, n: state.n - 1 };
    default:
      return state;
  }
};

//store operations
console.log("1");
const store = bigStore(cakeReducer);
console.log("cake State",store.getState());
console.log("2");

//
const unsubscribeLater=store.subscribe(()=>{console.log("subscribe",store.getState())});
console.log(unsubscribeLater);
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribeLater();
console.log("unsubscribe done");
store.dispatch(buyCake());