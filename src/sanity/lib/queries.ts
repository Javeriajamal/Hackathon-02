import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    *[_type == "products" ][0...12]{
    _id,
    title,
    description,
    price,
    pricewithoutDiscount,
    badge,
    category,
    inventoryManagement,
    tags,
    "imageUrl": image.asset->url,
    "slug": slug.current
    }`)


    export const twelvepro = defineQuery(`
        *[_type == "products" ][0..........11] {
        _id,
        title,
        description,
        price,
        pricewithoutDiscount,
        badge,
        category,
        inventoryManagement,
        tags,
        "imageUrl": image.asset->url,
        "slug": slug.current
        }`)