import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md border animate-pulse">
      {/* Image skeleton */}
      <div className="h-52 bg-base-200 rounded-t-lg"></div>

      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-4 bg-base-200 rounded w-3/4"></div>

        {/* Subtitle */}
        <div className="h-3 bg-base-200 rounded w-1/2"></div>

        {/* Price */}
        <div className="h-4 bg-base-200 rounded w-1/3"></div>

        {/* Rating */}
        <div className="flex gap-2 mt-2">
          <div className="h-3 w-3 bg-base-200 rounded-full"></div>
          <div className="h-3 w-3 bg-base-200 rounded-full"></div>
          <div className="h-3 w-3 bg-base-200 rounded-full"></div>
          <div className="h-3 w-3 bg-base-200 rounded-full"></div>
          <div className="h-3 w-3 bg-base-200 rounded-full"></div>
        </div>

        {/* Button */}
        <div className="h-10 bg-base-200 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
