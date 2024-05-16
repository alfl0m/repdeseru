import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleTouchStart = (evt) => {
    // evt.preventDefault(); // Prevent scrolling
    console.log("Touch started");
  };

  return (
    <div onTouchStart={handleTouchStart}>
      <h1>Touch me!</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
