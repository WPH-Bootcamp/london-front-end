import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-xl p-5 space-y-3">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="h-52 object-contain w-full"
      />

      <h2 className="font-bold">{product.title}</h2>

      <p className="text-xl font-semibold">${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="bg-black text-white px-4 py-2 rounded-lg inline-block"
      >
        Detail
      </Link>
    </div>
  );
}
