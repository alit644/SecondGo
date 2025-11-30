import { prisma } from "@/utils/prisma";
import { unstable_cache } from "next/cache";

export const getListingCached = unstable_cache(
  async (userId: string) => {
    return prisma.listing.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
  ["user-listings"],
  { revalidate: 60, tags: ["listing"] }
);

export const getListingByIdCached = unstable_cache(
  async (id: string) => {
    return prisma.listing.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  },
  ["listing-by-id"], // key
  { revalidate: 60, tags: ["listing"] }
);
