import { prisma } from "@/utils/prisma";
import { unstable_cache } from "next/cache";

export const getListingCached = unstable_cache(
  async (userId: string) => {
    return prisma.listing.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
  ["user-listings"], // key
  { revalidate: 60 }
);
