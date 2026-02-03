// const { redux } = "redux"; wrong
// const redux = require("redux"); or
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// }); // subscribe like that

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
// later in this course
export default store;
