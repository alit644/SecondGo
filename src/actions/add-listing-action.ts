/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { auth } from "@/auth";
import { uploadImages } from "@/lib/uploadImages";
import { prisma } from "@/utils/prisma";
import { ListingSchema, listingSchema } from "@/utils/schema";

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
    const userRole = await auth()
    if (userRole?.user.role !== "SALLER") {
      return {
        success: false,
        message: "User role is not SELLER",
      };
    }

    const imagesFiles = data.image;
    const imagesUrl = await uploadImages(imagesFiles , userId.user.id!);

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



    return {
      success: true,
      message: "Listing added successfully",
    };
  } catch (error: any) {
    console.log(error)
    return {
      success: false,
      message:
        error?.message || "Internal Server Error , Please try again later",
    };
  }
};
