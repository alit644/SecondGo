/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/utils/prisma";
import { unstable_cache } from "next/cache";
import { ListingWithUser, PaginationMeta } from "@/utils/types";

// response type
type UserListingsResponse = {
  success: boolean;
  message: string;
  data?: ListingWithUser[];
  meta?: PaginationMeta;
};
export const getUserData = async (
  userID: string,
  page: number
): Promise<UserListingsResponse> => {
  try {
    const res = await fetch(
      `${process.env.DOMAIN}/api/listings/user-listing/${userID}?page=${page}`,
      {
        cache: "force-cache",
        next: {
          revalidate: 60,
          tags: ["user-listing", `user-${userID}-listing`],
        },
      }
    );

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to fetch user listings",
        data: [],
        meta: {
          count: 0,
          page: 0,
          postPerPage: 0,
          totalPages: 0,
        },
      };
    }

    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Internal Server Error",
      data: [],
    };
  }
};
export const getDataById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.DOMAIN}/api/listings/listing/${id}`,
      {
        cache: "force-cache",
        next: { revalidate: 60, tags: ["listing-by-id", id] },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Internal Server Error",
      data: null,
    };
  }
};
export const getListingsCached = unstable_cache(
  async () => {
    return prisma.listing.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    });
  },
  ["all-listing"], // key
  { revalidate: 300, tags: ["all-listing"] }
);
