import React, { useState } from "react";

const Rendering = () => {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      name: "Apple",
      price: 10,
    },
    {
      id: 2,
      name: "Cherry",
      price: 3,
    },
    {
      id: 3,
      name: "Orange",
      price: 7,
    },
  ]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => {
            const { id, name, price } = fruit;
            return (
              <tr key={id}>
                <td>Fruit Number: {id}</td>
                <td>{name}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Rendering;
