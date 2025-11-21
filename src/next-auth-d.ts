// import { Role } from "@prisma/client";
// import { DefaultSession  } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: DefaultSession["user"] & {
//       id: string;
//       role: Role; 
//       firstName?: string | null;
//       lastName?: string | null;
//     };
//   }
// }

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
    };
  }

}
// declare module '@auth/core/jwt' {
//   interface JWTToken extends DefaultJWT {
//     id: string;
//     role: Role;
//     firstName?: string | null;
//     lastName?: string | null;
//   }
// }
//TODO : Check JWT interface usage in the project and update if necessary. 
//TODO : خطأ في توسيع واجهة JWT في next-auth. يجب استخدام اسم الواجهة الصحيح لتوسيعها بشكل صحيح. 
