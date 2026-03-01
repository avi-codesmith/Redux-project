// const { redux } = "redux"; wrong
// const redux = require("redux"); or
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCount: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
      ``;
    },
    toggleCount(state) {
      state.showCount = !state.showCount;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCount: state.showCount };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCount: state.showCount,
//     };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCount: state.showCount };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCount: !state.showCount,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

console.log(counterSlice.actions);
console.log(counterSlice.reducer);

const store = configureStore({
  reducer: counterSlice.reducer,
});

// store.subscribe(() => {
//   console.log(store.getState());
// }); // subscribe like that

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
// later in this course
export const counterActions = counterSlice.actions;
export default store;
