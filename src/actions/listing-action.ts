/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { auth } from "@/auth";
import { getListingByIdCached, getListingCached } from "@/lib/data";
import { uploadImages } from "@/lib/uploadImages";
import { prisma } from "@/utils/prisma";
import { ListingSchema, listingSchema } from "@/utils/schema";
import { revalidatePath } from "next/cache";

//! add listing action
export const addListingAction = async (data: ListingSchema) => {
  try {
    // validation
    const validation = listingSchema.safeParse(data);
    if (!validation.success) {
      return {
        success: false,
        message: validation.error.issues
          .map((issue) => issue.message)
          .join(", "),
      };
    }
    // get user id from session
    const userId = await auth();
    if (!userId) {
      return {
        success: false,
        message: "User not found",
      };
    }

    // user role (SALLER)
    const userRole = await auth();
    if (userRole?.user.role !== "SALLER") {
      return {
        success: false,
        message: "User role is not SELLER",
      };
    }

    const imagesFiles = data.image;
    const imagesUrl = await uploadImages(imagesFiles as File[], userId.user.id!);

    await prisma.listing.create({
      data: {
        title: data.title,
        description: data.description,
        category: data.category,
        price: data.price,
        condition: data.condition,
        isNegotiable: data.isNegotiable || false,
        tags: data.tags,
        image: imagesUrl,
        user: {
          connect: {
            id: userId.user.id,
          },
        },
        email: data.email,
        location: data.location,
        phone: data.phone,
      },
    });

    revalidatePath("/profile");
    return {
      success: true,
      message: "Listing added successfully",
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        error?.message || "Internal Server Error , Please try again later",
    };
  }
};

//! get user listings action
export const getUserListing = async () => {
  try {
    const session = await auth();
    if (!session) {
      return {
        success: false,
        message: "User not found",
      };
    }

    if (session?.user.role !== "SALLER") {
      return {
        success: false,
        message: "User role is not SELLER",
      };
    }

    // const listings = await prisma.listing.findMany({
    //   where: {
    //     userId: session.user.id,
    //   },
    //   orderBy: {
    //     createdAt: "desc",
    //   },
    // });
    const listings = await getListingCached(session.user.id);

    return {
      success: true,
      message: "Listings fetched successfully",
      data: listings,
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        error?.message || "Internal Server Error , Please try again later",
    };
  }
};

//! delete listing action
export const deleteListingAction = async (id: string) => {
  try {
    const session = await auth();
    if (!session) {
      return {
        success: false,
        message: "User not found",
      };
    }

    if (session?.user.role !== "SALLER") {
      return {
        success: false,
        message: "User role is not SELLER",
      };
    }
    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing) {
      return {
        success: false,
        message: "Listing not found",
      };
    }

    if (listing.userId !== session.user.id) {
      return {
        success: false,
        message: "You cannot delete this listing",
      };
    }

    await prisma.listing.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/profile");
    return {
      success: true,
      message: "Listing deleted successfully",
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        error?.message || "Internal Server Error , Please try again later",
    };
  }
};

//! get one listing action
export const getListingById = async (id: string) => {
 try {
  const session = await auth()
    if (!session) {
      return {
        success: false,
        message: "User not found",
      };
    }

    if (session?.user.role !== "SALLER") {
      return {
        success: false,
        message: "User role is not SELLER",
      };
    }

     const listing = await getListingByIdCached(id)

    if (!listing) {
      return {
        success: false,
        message: "Listing not found",
      };
    }

    if (listing.userId !== session.user.id) {
      return {
        success: false,
        message: "You do not have permission to access this listing",
      };
    }

    return {
      success: true,
      message: "Listing fetched successfully",
      data: listing,
    };
  
 } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        error?.message || "Internal Server Error , Please try again later",
    };
  }
}