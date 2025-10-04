import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";

export default async function Home() {
  return (
    <main>
      <Hero />
     
      <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
      <Benefits />
      <HowItWorks />
    </main>
  );
}
