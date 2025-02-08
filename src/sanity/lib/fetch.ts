/*import { createClient } from "next-sanity";


const client = createClient({

    projectId : "9oft4rgr",
    dataset : "production",
    useCdn: true,
    apiVersion : "2023-10-10"
})


export async function sanityFetch({query, params = {}}: {query : string, params? : any}) {
    return await client.fetch(query, params)
}*/


/*import { createClient } from "next-sanity";

const client = createClient({
  projectId: "9oft4rgr",
  dataset: "production",
  apiVersion: "2024-10-10", 
  useCdn: true, 
});

export async function sanityFetch(slug: string | null) {
  const query = `
    *[_type == "products" && slug.current == $slug][0] {
      _id,
      title,
      price,
      description,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }
  `;
  return await client.fetch(query, { slug });
}*/

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "9oft4rgr",
  dataset: "production",
  apiVersion: "2023-10-10", 
  useCdn: true, 
});

// Fetch ALL products for the listing page
export async function fetchAllProducts() {
  const query = `
    *[_type == "products"] | order(_createdAt desc) [0...12] {
      _id,
      title,
      price,
      description,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }
  `;
  /*return await client.fetch(query);*/
  try {
    const products = await client.fetch(query); // No second argument needed here
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Ensure to handle errors
  }

}


// Fetch a SINGLE product by slug (for product details page)
export async function sanityFetch(slug: string) {
  const query = `
    *[_type == "products" && slug.current == $slug][0] {
      _id,
      title,
      price,
      description,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }
  `;
  /*return await client.fetch(query, { slug });*/
  try {
    const product = await client.fetch(query, { slug });
    return product || null; // Return null if product not found
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; // Return null in case of error
  }

}


