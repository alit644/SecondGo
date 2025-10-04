import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Benefits";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCategoryCardsDemo";
export const revalidate = 120;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "SecondGo - Home",
  description: "Home page",
};
export default function Home() {
  return (
    <main>
      <div className="relative">
        <Hero />
        <InfiniteMovingCardsDemo />
      </div>

      <div>
        <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mb-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
        {/* show more button */}
        <div className="flex justify-center">
          <Button className="mt-4" variant="outline" aria-label="show more products" title="show more products">
            Show More
          </Button>
        </div>
      </div>
      <Benefits />
      {/* <HowItWorks /> */}
    </main>
  );
}
