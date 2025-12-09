import { prisma } from "@/utils/prisma";
import { unstable_cache } from "next/cache";


export const getUserData = async (userID: string, page: number) => {
    const res = await fetch(
    `${process.env.DOMAIN}/api/listings/user-listing/${userID}?page=${page}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 , tags: ["user-listing"]},
    }
  );
  if (!res.ok) return null;
  return res.json();
} 
export const getDataById = async (id: string) => {
  const res = await fetch(
    `${process.env.DOMAIN}/api/listings/listing/${id}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 , tags: ["listing-by-id" , id]},
    }
  );
  if (!res.ok) return null;
  return res.json();
}
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
