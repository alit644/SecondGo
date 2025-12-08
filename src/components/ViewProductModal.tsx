"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "./ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import MAvatar from "./shared/MAvatar";
import { Listing } from "@prisma/client";
import { Prisma } from "@prisma/client";
type ListingWithUser = Prisma.ListingGetPayload<{
  include: { user: { select: { image: true; id: true; name: true } } };
}>;
interface IViewProduct {
 listing : ListingWithUser
}
const ViewProductModal = ({listing}:IViewProduct) => {
  const router = useRouter();

  const product = {
    title: listing?.title,
    price: listing?.price,
    images: listing?.image || ["/215162792921.jpg"],
    creator: "@artist123",
    supply: 1,
    listed: 1,
  };

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="p-0 max-w-xs sm:max-w-sm">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="relative group">
           

            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-[-16px] left-4">
                <MAvatar userAvatar={listing?.user?.image || "/user-profile.jpg"} />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-3 pt-5">
              <h3 className="text-sm line-clamp-2 font-medium">
                {product.title}
              </h3>
              <div className="mt-1 flex items-center gap-1 text-[14px]">
                <Zap className="size-3 text-primary" />
                <span className="font-semibold">{product.price} $</span>
                <span className="text-muted-foreground text-xs">
                  • {product.listed}/{product.supply}
                </span>
              </div>

              <div className="mt-3 flex justify-between items-center">
                <Link
                  href="#"
                  aria-label="buy now"
                  className="text-indigo-500 hover:underline text-sm font-semibold"
                >
                  Buy Now
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-sm"
                  onClick={() => router.back()}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProductModal;
