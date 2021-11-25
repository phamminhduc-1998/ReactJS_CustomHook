import React from 'react';
import './App.css';
import CustomHook from './customHook/CustomHook';

function App() {
  const { count, increaseCount, decreaseCount } = CustomHook(0);
  return (
    <div className="App">
      <div>
        <p>{count}</p>
        <button onClick={() => increaseCount()}>+</button>
        <button onClick={() => decreaseCount()}>-</button>
      </div>
    </div>
  );
}

export default App;
