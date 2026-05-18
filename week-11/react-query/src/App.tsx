import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Tanpa TanStack / React Query
// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchProducts = async () => {};

//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return <></>;
// }

function App() {
  // const {data, isLoading, isError} = useQuery();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
