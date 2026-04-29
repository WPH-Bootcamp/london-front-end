import React, { useState } from "react";

const ControllerInput = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  console.log({
    //    email,
    //    password,
    //  });
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default ControllerInput;
