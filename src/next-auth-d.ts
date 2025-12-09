
import { Role } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role: string;
    id: string; 
  }

  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role: Role;
      firstName?: string | null;
      lastName?: string | null;
      image?:  string | null;
    };
  }

}
