import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.service";
import { type Product } from "../types";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <div>
      <h1>Warehouse Products</h1>

      <Link to="/add">Add Product</Link>

      <br />
      <br />

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((product: Product, index: number) => (
            <tr key={product.id}>
              <td>{index + 1}</td>

              <td>{product.name}</td>

              <td>
                <Link to={`/detail/${product.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
