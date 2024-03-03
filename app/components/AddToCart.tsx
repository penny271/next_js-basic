"use client"; // インタラクティブにするために必要

import React, { useState } from "react";

const AddToCart = () => {
  // State to store the message
  const [message, setMessage] = useState("");

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setMessage("Add to cart が押されました!")}
      >
        Add to Cart
      </button>
      {/* Display the message below the button */}
      {message && <div>{message}</div>}
    </div>
  );
};

export default AddToCart;
