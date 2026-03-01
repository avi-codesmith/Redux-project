// import { Component } from "react";
// import { connect } from "react-redux";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index.js";

import classes from "./Counter.module.css";

const Counter = () => {
  const input = useRef();
  const counter = useSelector((state) => state.counter);
  const showCount = useSelector((state) => state.showCount);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(counterActions.increment());
  };

  const increase = () => {
    dispatch(counterActions.increase(Number(input.current.value)));
    input.current.value = "";
  };

  const handleDec = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCount());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCount ? counter : "..."}</div>
      <div>
        <button onClick={handleInc}>+</button>
        <input placeholder="Enter a number" ref={input} type="number" />
        <button className="add" onClick={increase}>
          Add
        </button>
        <button onClick={handleDec}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {showCount ? "Hide Count" : "Show Count"}
      </button>
    </main>
  );
};

export default Counter;

// IN CASE OF CLASS BASED COMPONENTS

// class Counter extends Component {
//   handleInc() {
//     this.props.increment();
//   }

//   handleDec() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleInc.bind(this)}>+</button>
//           <button onClick={this.handleDec.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
