"use client";

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/services/product.service";

function useProducts() {
  return useQuery({
    queryKey: ["products"],

    queryFn: getProducts,
  });
}

export default useProducts;
