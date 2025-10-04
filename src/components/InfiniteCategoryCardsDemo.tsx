"use client";

import CategoryCard from "./shared/CategoryCard";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md  mb-2 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = Array.from({ length: 10 }).map((_, i) => (
 <CategoryCard key={i} />
))
