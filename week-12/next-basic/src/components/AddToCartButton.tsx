"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [count, setCount] = useState(0);

  function handleAddToCart() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-5 py-3 rounded-lg"
    >
      Add To Cart ({count})
    </button>
  );
}
