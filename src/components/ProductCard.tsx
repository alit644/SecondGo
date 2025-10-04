"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import Image from "next/image";
import { Heart, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import MAvatar from "./shared/MAvatar";

const ProductCard = () => {
  return (
    <motion.div
      className="w-full mb-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Card className="group gap-4 p-0 overflow-hidden hover:shadow-md transition-shadow">
        <CardHeader className="px-4 pt-4 relative">
          <div className="relative">
            {/* image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/215162792921.jpg"
                alt="product image"
                fill
                sizes="260px"
                priority
                className="object-cover"
              />
              <Button
                size="icon"
                aria-label="favorite"
                className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-white/90  shadow hover:bg-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                <Heart className="size-4 text-black" />
              </Button>
            </div>
          </div>
          <div className="absolute bottom-[-2px] left-7">
            <MAvatar />
          </div>
        </CardHeader>

        <CardContent className="px-4 pb-4">
          {/* title */}
          <CardTitle className="text-sm sm:text-md line-clamp-2">Amazing digital art </CardTitle>
          <CardDescription className="mt-1 font-semibold flex items-center gap-1 text-[15px]">
            <Zap className="size-3 text-primary" />
            21.99 ${/* count */}
            <span className="text-muted-foreground">• 1/1</span>
          </CardDescription>
          <Link
            href={"/"}
            aria-label="buy now"
            title="buy now"
            className="text-indigo-500 hover:underline transition text-md font-semibold"
          >
            Buy Now
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
