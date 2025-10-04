/* eslint-disable @typescript-eslint/no-explicit-any */
  "use client";
  
  import Image from "next/image";
  import { motion } from "framer-motion";
  import { ShoppingBag, Filter, Tag, Layers, DollarSign, Percent, SlidersHorizontal, ArrowUpDown } from "lucide-react";
  
  const item: any = {
   hidden: { opacity: 0, y: 20 },
   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } as any }
  };
  
  
  
  const Hero2 = () => {
    return (
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 pt-10">
          {/* Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/60 p-6 shadow-lg backdrop-blur-xl sm:p-10">
            {/* Pastel shapes */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-10 top-10 h-60 w-60 rounded-full bg-cyan-400/25 blur-3xl" />
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_0%,rgba(191,219,254,0.6),rgba(255,255,255,0.6)_35%,transparent_70%)]" />
            </div>

            <div className="flex items-center gap-6 sm:gap-10">
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="hidden sm:block">
                <Image src="/globe.svg" alt="globe" width={160} height={160} className="drop-shadow" />
              </motion.div>
              <motion.h1 variants={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-slate-800 sm:text-4xl">
                Explore
              </motion.h1>
            </div>
          </div>

          {/* Filters bar */}
          <div className="mt-4 overflow-x-auto">
            <div className="flex w-max items-center gap-2 rounded-2xl border border-white/30 bg-white/60 p-2 shadow-md backdrop-blur-xl">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
                <Filter className="h-4 w-4 text-slate-500" /> Filter
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">
                <Layers className="h-4 w-4 text-slate-500" /> Blockchain
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">
                <Tag className="h-4 w-4 text-slate-500" /> Category
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">
                <ShoppingBag className="h-4 w-4 text-slate-500" /> Collections
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">
                <DollarSign className="h-4 w-4 text-slate-500" /> Price range
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">
                <Percent className="h-4 w-4 text-slate-500" /> On sale
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">
                <SlidersHorizontal className="h-4 w-4 text-slate-500" /> More filters
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">
                <ArrowUpDown className="h-4 w-4 text-slate-500" /> Sort by
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero2;
