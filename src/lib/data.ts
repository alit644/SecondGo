import { prisma } from "@/utils/prisma";
import { unstable_cache } from "next/cache";


export const getUserData = async (userID: string, page: number) => {
    const res = await fetch(
    `${process.env.DOMAIN}/api/listings/${userID}?page=${page}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) return null;
  return res.json();
}


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

export const getListingsCached = unstable_cache(
  async () => {
    return prisma.listing.findMany({
      include: {
        user: true,
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    });
  },
  ["all-listing"], // key
  { revalidate: 3600, tags: ["all-listing"] }
);
