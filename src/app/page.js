import Image from "next/image";
import FoodBanner from "./Components/Banner";
import PricingCard from "./Components/PricingCard";

export default function Home() {
  return (
   <div>
    <FoodBanner></FoodBanner>
   <PricingCard></PricingCard>
   </div>
  );
}
