import AddToCartButton from "@/components/AddToCartButton";
import ProductList from "@/components/ProductList";

import { getProducts } from "@/services/product.service";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Products</h1>

        <ProductList products={products} />
      </div>
      {/* <div>
        <AddToCartButton></AddToCartButton>
      </div> */}
    </>
  );
}
