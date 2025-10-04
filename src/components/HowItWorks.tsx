"use client";
import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { sellerSteps } from "@/data";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.45,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const HowItWorks = () => {
  return (
    <section className="relative mx-auto my-12 w-full px-6">
      {/* subtle bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-60 w-[70%] -translate-x-1/2 rounded-[40px] bg-gradient-to-b from-blue-400/10 via-indigo-300/10 to-fuchsia-300/10 blur-2xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={item} className="text-center">
          <h2 className="bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-cyan-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl dark:from-indigo-300 dark:via-fuchsia-300 dark:to-cyan-300">
            How it works: Become a Seller
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Four simple steps to launch your shop and start earning.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sellerSteps.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: cubicBezier(0.16, 1, 0.3, 1) }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-sm hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              {/* step number */}
              <div className="absolute right-4 top-4 select-none text-6xl font-black tracking-tighter text-foreground/5 group-hover:text-foreground/10">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="relative flex flex-col gap-3">
                <div className="grid size-12 place-items-center rounded-xl bg-foreground/5 text-foreground/80 shadow-sm dark:bg-white/10">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
