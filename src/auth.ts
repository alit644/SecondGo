import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./utils/prisma";
import authConfig from "./auth.config";
import { Role } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
     async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.fullName = user.name;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub!;
      session.user.role = token.role as Role;

      const user = await prisma.user.findUnique({
        where: {
          id: token.sub,
        },
      });
      if (user) {
        session.user.id = user.id;
        session.user.firstName = user.firstName;
        session.user.lastName = user.lastName;
        session.user.role = user.role as Role;
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
