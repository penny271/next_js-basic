// "use client"; 不要  <= より小さいAddToCart componentに使用する
// app/components/ProductCard.tsx

import React from "react";
import AddToCart from "./AddToCart";
// tailWindを使わない場合: 従来通りに.cssファイルで直接スタイルできる
// import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    // <div className={styles.card}>
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
