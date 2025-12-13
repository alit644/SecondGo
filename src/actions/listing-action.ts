/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { auth } from "@/auth";
import { ApiResponse, fail, ok } from "@/lib/api-response";
import {
  getListingsCached,
} from "@/lib/data";
import { uploadImages } from "@/lib/uploadImages";
import { prisma } from "@/utils/prisma";
import { ListingSchema, listingSchema } from "@/utils/schema";
import {  ListingWithUser } from "@/utils/types";
import { revalidatePath, revalidateTag } from "next/cache";

//! POST listing action
export const addListingAction = async (data: ListingSchema) : Promise<ApiResponse<null>> => {
  try {
    // validation
    const validation = listingSchema.safeParse(data);
    if (!validation.success) {
      return fail(validation.error.issues.map((i) => i.message).join(", "));
    }
    // get user id from session
    const userId = await auth();
    if (!userId) {
      return fail("User not found");
    }

    // user role (SALLER)
    const userRole = await auth();
    if (userRole?.user.role !== "SALLER") {
      return fail("User role is not SELLER");
    }

    const imagesFiles = data.image;
    const imagesUrl = await uploadImages(
      imagesFiles as File[],
      userId.user.id!
    );

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

    revalidatePath("/profile" , "page");
    revalidateTag("all-listing");
    revalidateTag("listing");
    return ok(null , "Listing added successfully");
  } catch (error: any) {
    return fail(error?.message || "Internal Server Error , Please try again later");
  }
};

//! DELETE listing action
export const deleteListingAction = async (id: string) : Promise<ApiResponse<null>> => {
  try {
    const session = await auth();
    if (!session) {
      return fail("User not found");
    }

    if (session?.user.role !== "SALLER") {
      return fail("Only sellers can delete listings");
    }
    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing) {
      return fail("Listing not found");
    }

    if (listing.userId !== session.user.id) {
      return fail("You cannot delete this listing");
    }

    await prisma.listing.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/profile" , "page");
    revalidateTag("all-listing");
    revalidateTag("listing");

    return ok(null, "Listing deleted successfully");
  } catch (error: any) {
    return fail(error?.message || "Internal Server Error , Please try again later");
  }
};
//! UPDATE listing action
export const updateListingAction = async (data: ListingSchema, id: string) : Promise<ApiResponse<null>> => {
  try {
    // validation
    const validation = listingSchema.safeParse(data);
    if (!validation.success) {
      return fail(
        validation.error.issues.map((i) => i.message).join(", ")
      );
    }
    // get user id from session
    const session = await auth();

    if (!session) {
      return fail("User not found");
    }

    // user role (SALLER)
    if (session?.user.role !== "SALLER") {
      return fail("Only sellers can update listings");
    }

    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing) {
      return fail("Listing not found");
    }

    if (listing.userId !== session.user.id) {
      return fail("You do not have permission to access this listing");
    }
    //  Upload only new images (files)
    const newFiles = data.image.filter((img) => img instanceof File) as File[];
    const uploadedImages = await uploadImages(newFiles, session.user.id);
    //  Merge old + new images
    const finalImages = [
      ...data.image.filter((img) => typeof img === "string"),
      ...uploadedImages,
    ];

    await prisma.listing.update({
      data: {
        title: data.title,
        description: data.description,
        category: data.category,
        price: data.price,
        condition: data.condition,
        isNegotiable: data.isNegotiable || false,
        tags: data.tags,
        image: finalImages,
        email: data.email,
        location: data.location,
        phone: data.phone,
      },
      where: { id },
    });

    revalidatePath("/profile" , "page");
    revalidateTag("listing");
    revalidateTag("all-listing");
    return ok(null, "Listing updated successfully");
  } catch (error: any) {
    return fail(error?.message || "Internal Server Error , Please try again later");
  }
};

//! GET public listing action 
export const getPublicListings = async () : Promise<ApiResponse<ListingWithUser[]>> => {
  try {
    const listings = await getListingsCached();
    return ok(listings, "Listings fetched successfully");
  } catch (error: any) {
    return fail(error?.message || "Internal Server Error , Please try again later");
  }
};
