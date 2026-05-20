import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5">
      <div className="flex gap-5">
        <Link href="/">Home</Link>

        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
