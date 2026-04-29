import React, { useState } from "react";

const BasicState = () => {
  const [count, setCount] = useState<number>(0);

  function addHandler() {
    console.log("Add Handler");
    if (count >= 10) {
      alert("Max 10");
    } else {
      setCount(count + 1);
    }
  }

  function subHandler() {
    console.log("Sub Handler");
    if (count <= 0) {
      alert("Min 0");
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={addHandler}>Add</button>
      <button onClick={subHandler}>Substract</button>
    </div>
  );
};

export default BasicState;
