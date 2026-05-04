import React, { useState } from "react";

type InputProps = {
  value: string;
  onChange: (v: string) => void;
};

type DisplayProps = {
  value: string;
};

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type here..."
    />
  );
};

const Display = ({ value }: DisplayProps) => {
  return <p>{value}</p>;
};

const LiftingState = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Lifting State</h1>
      <Input value={text} onChange={setText} />
      <Display value={text} />
    </div>
  );
};

export default LiftingState;
