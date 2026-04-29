import React, { useState } from "react";

const BasicState = () => {
  const [count, setCount] = useState<number>(0);

  function addHandler() {
    console.log("Add Handler");
  }

  function subHandler() {
    console.log("Sub Handler");
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
