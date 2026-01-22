"use client";

import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    reviews = 0,
    sold = 0,
    ratings = 0,
  } = product || {};

  return (
    <div className="card bg-base-100 border shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
      
      {/* Image */}
      <figure className="relative h-52 bg-base-200 overflow-hidden">
        <Image
        width={200}
        height={180}
        
          src={image}
          alt={title || "Product image"}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.png";
          }}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-4 space-y-2">
        
        {/* Title */}
        <h2
          className="text-sm font-semibold line-clamp-2"
          title={title}
        >
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-500" />
          <span className="font-medium">{ratings.toFixed(1)}</span>
          <span className="text-gray-400 text-xs">
            ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-primary">
          ৳ {price}
        </p>

        {/* Sold */}
        <p className="text-xs text-gray-500">
          {sold}+ sold
        </p>

        {/* Action */}
        <button
          className="btn btn-primary btn-sm w-full gap-2 mt-2"
          aria-label="Add product to cart"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
