import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Benefits";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCategoryCardsDemo";
import { getPublicListings } from "@/actions/listing-action";
import ErrorState from "@/components/shared/ErrorState";
export const revalidate = 300;

export const metadata: Metadata = {
  title: "SecondGo - Home",
  description: "Home page",
};
export default async function Home() {
  const result = await getPublicListings();
  return (
    <main>
      <div className="relative">
        <Hero />

        <InfiniteMovingCardsDemo />
      </div>
      {/* not show if success is false */}
       {/* Error State */}
      {!result.success && (
        <ErrorState
          message={result.message}
        />
      )}
      {/* Success State */}
      {result.success && (
        <div>
          <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mb-6">
            {result?.data?.map((listing) => (
              <ProductCard key={listing.id} listing={listing} />
            ))}
          </div>
          {/* show more button */}
          <div className="flex justify-center">
            <Button
              className="mt-4"
              variant="outline"
              aria-label="show more products"
              title="show more products"
            >
              Show More
            </Button>
          </div>
        </div>
      )}

      <Benefits />
      {/* <HowItWorks /> */}
    </main>
  );
}
