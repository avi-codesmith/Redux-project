import { Component } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const handleInc = () => {
//     dispatch({
//       type: "increment",
//     });
//   };

//   const handleDec = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={handleInc}>+</button>
//         <button onClick={handleDec}>-</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  handleInc() {
    this.props.mapDispatchToProps.increment;
  }

  handleDec() {
    this.props.mapDispatchToProps.decrement;
  }

  toggleCounterHandler() {}
  render() {
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.handleInc.bind(this)}>+</button>
        <button onClick={this.handleDec.bind(this)}>-</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>;
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
