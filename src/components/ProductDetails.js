import React, { useState, useEffect } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch data from the mock API (replace with your API endpoint)
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </section>
  );
};

export default ProductDetails;
