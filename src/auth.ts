import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./utils/prisma";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth, } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
     const user = await prisma.user.findUnique({
      where: {
        id: token.sub,
      },
    });
    if (user) {
     session.user.id = user.id;
      session.user.firstName = user.firstName;
      session.user.lastName = user.lastName;
    }
      return session;
    },
    
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  ...authConfig,
});
