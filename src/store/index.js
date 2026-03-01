// const { redux } = "redux"; wrong
// const redux = require("redux"); or
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCount: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCount(state) {
      state.showCount = !state.showCount;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  // reducer: counterSlice.reducer,
});

// store.subscribe(() => {
//   console.log(store.getState());
// }); // subscribe like that

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
// later in this course
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
