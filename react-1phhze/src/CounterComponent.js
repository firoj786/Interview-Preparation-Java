import React from 'react';
import useCounter from './useCounter';
import './style.css';

function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} className="increment-button">
        Increment
      </button>
      <button onClick={decrement} className="decrement-button">
        Decrement
      </button>
    </div>
  );
}

export default CounterComponent;
