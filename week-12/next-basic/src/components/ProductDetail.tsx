import Image from "next/image";

import { Product } from "@/types";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-96 object-contain"
        />
      </div>

      <div className="space-y-5">
        <h1 className="text-4xl font-bold">{product.title}</h1>

        <p>{product.description}</p>

        <p className="text-3xl font-semibold">${product.price}</p>
      </div>
    </div>
  );
}
