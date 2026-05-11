import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";
import Add from "./components/Add";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data);
      setProducts(response.data);
    } catch (err: any) {
      setError(err.message);
    }
  }

  useEffect(() => {
    console.log("Fetching products...");
    fetchProducts();
  }, []);

  return (
    <>
      <List products={products} />
      <Add />
    </>
  );
}

export default App;
