import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/product.service";

export default function DetailById() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],

    queryFn: () => getProductById(Number(id)),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <div>
      <h1>Product Detail</h1>

      <h2>{data?.name}</h2>

      <p>{data?.category}</p>

      <p>{data?.brand}</p>

      <p>${data?.price}</p>

      <p>Stock: {data?.stock}</p>

      <p>Warehouse: {data?.warehouse}</p>
    </div>
  );
}
