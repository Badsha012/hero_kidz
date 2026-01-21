"use client";

import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { title, image, price, reviews, sold, ratings } = product;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 border">
      
      {/* Image */}
      <figure className="relative h-52 bg-base-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-4 space-y-2">
        
        {/* Title */}
        <h2 className="text-sm font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-400 text-xs">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-primary">
          ৳ {price}
        </p>

        {/* Sold */}
        <p className="text-xs text-gray-500">
          Sold: {sold}
        </p>

        {/* Button */}
        <button className="btn btn-primary btn-sm w-full gap-2 mt-2">
          <ShoppingCart size={16} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
