/* eslint-disable @typescript-eslint/no-explicit-any */
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
export interface Listing extends ListingSchema {
    id: string;
    status: "Active" | "INACTIVE" | "SOLD" | "DELETED";
    createdAt: Date;
    updatedAt: Date;
}