import ProductDetail from "@/components/ProductDetail";

import { getProductById } from "@/services/product.service";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);

  return <ProductDetail product={product} />;
  // return <div>{JSON.stringify(product)}</div>;
}
