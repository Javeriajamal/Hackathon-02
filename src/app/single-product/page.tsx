"use client"

import { useRouter } from "next/router";
import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";

// Define the Product interface
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: { current: string };
}

const client = createClient({
  projectId: "9oft4rgr", // Your Sanity project ID
  dataset: "production", // Your dataset name
  apiVersion: "2023-01-01", // Sanity API version
  useCdn: false, // Set to false if you want to ensure fresh data
});

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Initialize the state with the correct type
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (slug) {
      // Fetch the product data from Sanity using the slug
      client
        .fetch(`*[_type == "products" && slug.current == $slug][0]`, { slug })
        .then((data: Product) => {
          setProduct(data); // Set the product data
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [slug]);

  // If the product is still loading, show a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
