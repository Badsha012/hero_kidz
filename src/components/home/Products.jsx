import React from 'react';
import products from "@/data/toys.json"
import ProductCard from '../card/ProductCard';

const Products = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Our Products</h2>
            <div  className='grid grid-cols-3 gap-5'>
                {
                    products.map(product=>
                    <ProductCard key={product.title} product={product}></ProductCard>
               )
                }


            </div>
        </div>
    );
};

export default Products;