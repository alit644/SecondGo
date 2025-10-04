import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string({ error: "First name is required" })
    .min(2, "First name must be at least 2 characters long"),
  lastName: z
    .string({ error: "Last name is required" })
    .min(2, "Last name must be at least 2 characters long"),
  email: z
    .string({ error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ error: "Password is required" })
    .min(6, "Password must be at least 6 characters long"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string({ error: "Email is required" }).email("Invalid email address"),
  password: z.string({ error: "Password is required" }).min(6, "Password must be at least 6 characters long"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
