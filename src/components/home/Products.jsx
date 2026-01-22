import React from "react";
import ProductCard from "../card/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const products = (await getProducts()) || [];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product._id?.toString()}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
