"use client";

import ProductList from "@/components/ProductList";

import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return <h1 className="text-3xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-3xl">Error...</h1>;
  }

  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold">Products</h1>

      <ProductList products={products || []} />
    </div>
  );
}
