import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./utils/schema";
import { prisma } from "./utils/prisma";
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
 providers: [
  Credentials({
    name: "credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      // validation
      const validation = loginSchema.safeParse(credentials);
      if (validation.success) {
        const { email, password } = validation.data;

        // check user exists
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!user || !user.password) {
          return null;
        }
        // check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          };
        }
      }
      return null;
    },
  }),
  Github({
   clientId: process.env.GITHUB_CLIENT_ID,
   clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  Google({
   clientId: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
],
} satisfies NextAuthConfig;