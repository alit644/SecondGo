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
  email: z
    .string({ error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ error: "Password is required" })
    .min(6, "Password must be at least 6 characters long"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const listingSchema = z.object({
  title: z
    .string({ error: "Title is required" })
    .min(3, "Title must be at least 3 characters long"),
  description: z
    .string({ error: "Description is required" })
    .min(10, "Description must be at least 10 characters long")
    .max(1000, "Description must be at most 1000 characters long"),
  category: z.string({ error: "Category is required" }),
  price: z.coerce.number({ error: "Price is required" })
    .min(1, "Price must be at least 1")
    .max(1000000, "Price must be at most 1000000"),
  condition: z.enum(["new", "used", "good", "fair"], {
    error: "Condition is required",
  }),
  isNegotiable: z.boolean().optional(),

  location: z
    .string({ error: "Location is required" })
    .min(3, "Location must be at least 3 characters long"),
  phone: z
    .string({ error: "Phone is required" })
    .regex(
      /^\+?[0-9\s-()]{10,20}$/,
      "Please enter a valid phone number (e.g., +1234567890 or 0123456789)"
    ),
  email: z
    .string({ error: "Email is required" })
    .email("Invalid email address"),
  tags: z.array(z.string({ error: "Tag is required" })),
  image: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) => file.size <= 5 * 1024 * 1024,
          "Each file must be under 5MB"
        )
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "image/gif"].includes(file.type),
          "Only JPG, PNG, or GIF files are allowed"
        )
    )
    .max(5, "You can upload up to 5 images"),
});

export type ListingSchema = z.infer<typeof listingSchema>;
