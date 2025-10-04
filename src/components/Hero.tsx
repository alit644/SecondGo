"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="rounded-xl my-6 mx-auto relative min-h-[50vh] overflow-hidden bg-gradient-to-b from-white via-indigo-50/50 to-blue-50/60 dark:from-background dark:via-indigo-950/20 dark:to-slate-950/20">
      {/* Subtle grid/pattern background (SVG) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#fade)" />
        </svg>
      </div>
      {/* Soft gradient blobs for a lively feel (no animations) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/40 via-pink-300/30 to-orange-300/30 blur-3xl" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-400/40 via-sky-300/30 to-cyan-300/30 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/30 via-teal-300/30 to-lime-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:py-20 lg:flex-row lg:gap-14">
        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-start">
          <h1 className="mx-auto max-w-2xl bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-cyan-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl dark:from-indigo-600 dark:via-fuchsia-500 dark:to-cyan-500">
            Explore the Marketplace. Buy, Sell, and Trade with Confidence{" "}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
            Fast, simple marketplace. Discover trending products, compare
            prices, and checkout securely.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/explore"
              aria-label="explore marketplace"
              title="explore marketplace"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Explore Marketplace Now
            </Link>
            <Link
              href="/sell"
              aria-label="sell product"
              title="sell product"
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-white/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white/80 dark:bg-white/5 dark:text-white"
            >
              Start Selling Today
            </Link>
          </div>
        </div>

        {/* Right: lightweight preview card with 3D hover and marketplace badges */}
        <div className="flex-1 relative">
          <div className="group relative mx-auto w-full max-w-md [perspective:1200px]">
            {/* Elegant floating chips around the card */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
              {/* soft halo behind card */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-400/30 via-fuchsia-300/20 to-cyan-300/20 blur-2xl" />
            </div>
            {/* top-left chip */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-5 -left-3 select-none"
            >
              <span className="rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                ✨ New Feature
              </span>
            </div>
            {/* top-right ribbon */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-4 right-0 select-none"
            >
              <span className="inline-block -skew-x-6 rounded-md bg-gradient-to-r from-rose-500 to-orange-400 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                30% Discount
              </span>
            </div>
            {/* bottom-left chip */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -left-2 select-none"
            >
              <span className="rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                🚚 Free Shipping
              </span>
            </div>
            {/* bottom-right rating */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-2 select-none"
            >
              <span className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                Trusted ★ 4.9
              </span>
            </div>

            <div className="relative rounded-2xl border border-black/5 bg-white/70 p-4 shadow-lg backdrop-blur-sm transition-transform duration-500 ease-out will-change-transform [transform:rotateX(6deg)_rotateY(-6deg)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)] group-hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
              <div className="flex gap-2 items-center justify-between border-b border-black/5 pb-3 text-sm dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-teal-400" />
                  <span className="h-3 w-24 rounded-full bg-foreground/15" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-7 w-20 rounded-md bg-foreground/10" />
                  <span className="h-7 w-7 rounded-md bg-foreground/10" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-black/5 bg-white/60 p-2 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="h-16 w-full rounded-md bg-gradient-to-br from-gray-200/80 to-gray-100/60 dark:from-white/10 dark:to-white/5" />
                    <div className="mt-2 h-2  w-20 rounded-full bg-foreground/15" />
                    <div className="mt-1 flex items-center justify-between">
                      <div className="h-2 w-10 rounded-full bg-foreground/15" />
                      <div className="text-[10px] text-yellow-500">★★★★☆</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="h-6 w-24 rounded-md bg-foreground/10" />

                <Link
                  href="/marketplace"
                  aria-label="Open Marketplace"
                  className="rounded-md bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background transition hover:bg-foreground"
                >
                  Open Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
