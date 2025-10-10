/* eslint-disable @typescript-eslint/no-explicit-any */

import { prisma } from "@/utils/prisma";

export const verifyTokenAction = async (token: string) => {
  try {
    const isValidToken = await prisma.verificationToken.findUnique({
      where: {
        token,
      },
    });
    if (!isValidToken) {
      return { success: false, message: "Invalid token" };
    }
    const isExpired = new Date(isValidToken.expires) < new Date();
    if (isExpired) {
      return { success: false, message: "Token expired , Please try again" };
    }
    const user = await prisma.user.findUnique({
      where: {
        email: isValidToken.email,
      },
    });
    if (!user) {
      return { success: false, message: "User not found" };
    }
    await prisma.user.update({
      where: {
        email: isValidToken.email,
      },
      data: {
        emailVerified: new Date(),
        role: "SALLER",
      },
    });
    await prisma.verificationToken.delete({
      where: {
        token,
      },
    });
    return { success: true, message: "User verified successfully" };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error?.message || "something went wrong",
    };
  }
};
