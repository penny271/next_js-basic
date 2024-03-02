// "use client";  <= より小さいAddToCart componentに使用する

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
ProductCard;

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      {/* //! aタグだと画面全体をrenderしてしまうので非効率 NG */}
      {/* <a href="/users">Users</a> */}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
