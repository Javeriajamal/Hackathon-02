import Image from "next/image";
import Hero from "./components/homepage/Hero";
import Logos from "./components/homepage/Logos";
import Featured from "./components/homepage/featured";
import Catagories from "./components/homepage/categories";
import Popular from "./components/homepage/popular";
import Products from "./components/homepage/products";

export default function Home() {
  return (
    <div className="xs:h-auto">
      <Hero />
      <Logos />
      <Featured />
      <Catagories />
      <Popular />
      <Products />



    </div>

  )
}  