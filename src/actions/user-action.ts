/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { auth } from "@/auth";
import supabase from "@/supabase";
import { prisma } from "@/utils/prisma";
import { accountSchema } from "@/utils/schema";
import { revalidatePath } from "next/cache";

export const updateAccountAction = async (formdata: FormData) => {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, message: "Unauthorized" };
    }
    const data = {
      firstName: formdata.get("firstName") as string,
      lastName: formdata.get("lastName") as string,
      location: (formdata.get("location") as string) || null,
      phone: (formdata.get("phone") as string) || null,
    };
    // validation
    const validationData = accountSchema.safeParse(data);
    if (!validationData.success) {
      return {
        success: false,
        message: validationData.error.issues
          .map((issue) => issue.message)
          .join(", "),
      };
    }

    await prisma.user.update({
      where: { id: session?.user.id },
      data: validationData.data,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        phone: true,
      },
    });
    revalidatePath("/profile/account");

    return { success: true, message: "Profile updated" };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.message || "Internal Server Error , Please try again later",
    };
  }
};

export const uploadAvatarAction = async (formData: FormData) => {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, message: "Unauthorized" };
    }
    const file = formData.get("avatar") as File;
    if (!file) {
      return { success: false, message: "No file received" };
    }
    const fileName = `${Date.now()}-${file.name}`;
    const path = `avatar/${session?.user.id}/${fileName}`;
    const { error } = await supabase.storage.from("avatar").upload(path, file);
    if (error) {
      return { success: false, message: "Upload failed" };
    } // get the url of the uploaded image

    const {
      data: { publicUrl },
    } = supabase.storage.from("avatar").getPublicUrl(path);

    await prisma.user.update({
      where: { id: session?.user.id },
      data: { image: publicUrl }, // update user image url
    });
    revalidatePath("/profile");
    return { success: true, message: "Avatar uploaded", url: publicUrl };
  } catch (error: any) {
    return {
      success: false,
      message:
        error?.message || "Internal Server Error , Please try again later",
    };
  }
};
