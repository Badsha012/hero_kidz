"use server";

import { Collections, dbconnect } from "@/lib/dbConnect";
import {ObjectId } from "mongodb";


 



export const getProducts = async () => {
  const collection = await dbconnect(Collections.PRODUCTS);
  const products = await collection.find().toArray();
  return products;
};

export const getSingleProduct=async(id) =>{
    if(id.length !=24){
        return {};
    }
    const query={_id:new ObjectId(id)};
    const product=await dbconnect(Collection.PRODUCTS).findOne(query);
    return product;


}