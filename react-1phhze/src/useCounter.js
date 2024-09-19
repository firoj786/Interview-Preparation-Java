import { useState } from 'react';
import './style.css';
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((preVCount) => preVCount + 1);
  };
  const decrement = () => {
    setCount((preVCount) => preVCount - 1);
  };
  return {
    count,
    increment,
    decrement,
  };
}

export default useCounter;
