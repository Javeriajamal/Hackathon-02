import { StaticImageData } from "next/image";


//   Product data types
export interface product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string[];    
  slug: string;       // Unique slug to identify the product
  qty: number;        
  discount: number;
  id?: string;        // Optional ID if it’s different from `_id`
  category?: string;  // Optional category field, ensure this is added if necessary
  current: string; 
};

//   cart data types
  export type Cart = {
    id: number;
    title: string; 
    imageUrl: string[] | StaticImageData | string; 
    slug: string; 
    price: number; 
    qty: number; 
    discount?: number; 
    current: string;
  };
  