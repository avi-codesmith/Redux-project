import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter.js";

import classes from "./Counter.module.css";

const Counter = () => {
  const input = useRef();
  const counter = useSelector((state) => state.counter.counter);
  const showCount = useSelector((state) => state.counter.showCount);
  const dispatch = useDispatch();

  const handleInc = (e) => {
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
