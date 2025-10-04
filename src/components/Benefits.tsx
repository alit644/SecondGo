"use client";
import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { benefits } from "@/data";



const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const Benefits = () => {
  return (
    <section className="relative mx-auto my-10 w-full px-6">
      {/* soft background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-[40px] bg-gradient-to-b from-indigo-400/10 via-fuchsia-300/10 to-cyan-300/10 blur-2xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center"
      >
        <motion.h2
          variants={itemVariant}
          className="bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-cyan-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl dark:from-indigo-300 dark:via-fuchsia-300 dark:to-cyan-300"
        >
          Why choose our marketplace?
        </motion.h2>
        <motion.p
          variants={itemVariant}
          className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          Built for speed, trust, and a delightful shopping experience.
        </motion.p>

        <motion.div
          variants={container}
          className="mt-8 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map(({ icon: Icon, title, desc, gradient }) => (
            <motion.div
              key={title}
              variants={itemVariant}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: cubicBezier(0.16, 1, 0.3, 1) }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-colors hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <div
                aria-hidden
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${gradient} blur-2xl transition-opacity group-hover:opacity-90`}
              />

              <div className="relative flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-foreground/5 text-foreground/80 shadow-sm dark:bg-white/10">
                  <Icon className="size-5" />
                </div>
                <div className="text-start">
                  <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
