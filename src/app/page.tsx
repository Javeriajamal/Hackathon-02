import Hero from "@/app/component/homepage/Hero";
import Logos from "@/app/component/homepage/Logos";
import Featured from "@/app/component/homepage/featured";
import Catagories from "@/app/component/homepage/popular";
import Popular from "@/app/component/homepage/popular";
import Products from "./component/homepage/products";

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