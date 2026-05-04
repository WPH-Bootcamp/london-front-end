import React, { useState, useCallback } from "react";

type ChildProps = {
  onClick: () => void;
};

// const ChildComponent = ({ onClick }: ChildProps) => {
//   console.log("Child Component Rendered");
//   return <button onClick={onClick}>Klik Child</button>;
// };

const ChildComponent = React.memo(({ onClick }: ChildProps) => {
  console.log("Child Component Rendered");
  return <button onClick={onClick}>Klik Child</button>;
});

const Callback = () => {
  const [number, setNumber] = useState<number>(0);

  // const handleClick = () => {
  //   console.log("Handle Clicked");
  // };

  const handleClick = useCallback(() => {
    console.log("Handle Clicked");
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => setNumber(number + 1)}
          className="py-2 px-3 bg-green-700 text-white hover:bg-green-800 rounded-lg"
        >
          Add Number
        </button>
        <p className="text-3xl font-bold text-blue-600">{number}</p>
      </div>
      <ChildComponent onClick={handleClick} />
    </>
  );
};

export default Callback;
