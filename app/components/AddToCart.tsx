"use client"; // インタラクティブにするために必要

import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button onClick={() => console.log("Click")}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
