// "use client";  <= より小さいAddToCart componentに使用する

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
ProductCard;

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl mb-5">Basic Next.js App</h1>
      {/* <h1>Hello world</h1> */}
      {/* //! aタグだと画面全体をrenderしてしまうので非効率 NG */}
      {/* <a href="/users">Users</a> */}
      <Link className="link link-secondary mb-2 block" href="/users">
        To Users
      </Link>
      <ProductCard />
    </main>
  );
}
