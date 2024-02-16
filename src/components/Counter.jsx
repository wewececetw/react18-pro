import React, { useState } from "react";
import styles from "../Button.module.css";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
      <button className={styles.button} onClick={decrement}>
        Decrement
      </button>
      <h2>Increment by: {incrementBy}</h2>
      <button className={styles.button} onClick={increaseIncrement}>
        Increase Increment
      </button>
      <button className={styles.button} onClick={decreaseIncrement}>
        Decrease Increment
      </button>
    </div>
  );
}
