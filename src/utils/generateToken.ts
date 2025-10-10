"use server"
import { prisma } from "./prisma";
import { randomUUID } from "node:crypto";

export const generateToken = async ({ email }: { email: string }) => {
  const isVerificationToken = await prisma.verificationToken.findFirst({
    where: {
      email,
    },
  });

  if (isVerificationToken) {
    await prisma.verificationToken.delete({
      where: {
        id: isVerificationToken.id,
      },
    });
  }

  const newVerificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token: randomUUID(),
      // 2 hours
      expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
    },
  });

  return newVerificationToken;
};
