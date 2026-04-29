import React, { useState } from "react";

type User = {
  id: number;
  email: string;
  password: string;
};

const TableForm = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: User = {
      id: Date.now(),
      email,
      password,
    };

    setUsers([...users, newUser]);
    setEmail("");
    setPassword("");
  };

  return (
    // React Fragment
    <>
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
          <input type="submit" value="Input User" />
        </form>
      </div>
      <h3>User List</h3>
      <hr />
      <div>
        <table className="table-form" border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => {
                const { id, email, password } = user;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3}>No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableForm;
