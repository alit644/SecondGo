/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from "@prisma/client";
import { ListingSchema } from "../schema";

export interface RegisterInput {
    id: string;
    label: string;
    name: "email" | "password";
    type: string;
    placeholder: string;
}


export interface AuthResponse {
    success: boolean;
    message: string;
    data?: any;
}


export type ListingWithUser = Prisma.ListingGetPayload<{
  include: { user: { select: { image: true; id: true; name: true } } };
}>;

export interface IProductCard {
  listing: ListingWithUser;
}

export type PaginationMeta = {
  count: number;
  page: number;
  postPerPage: number;
  totalPages: number;
};