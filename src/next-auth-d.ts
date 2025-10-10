import { Role } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      firstName?: string | null;
      lastName?: string | null;
      role?: Role
    };
  }
}
