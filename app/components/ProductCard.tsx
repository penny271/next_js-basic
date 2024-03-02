// "use client"; 不要  <= より小さいAddToCart componentに使用する

import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
