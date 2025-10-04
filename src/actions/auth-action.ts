/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/utils/prisma";
import {
  loginSchema,
  LoginSchema,
  RegisterSchema,
  registerSchema,
} from "@/utils/schema";
import { AuthResponse } from "@/utils/types";
import bycrypt from "bcryptjs";
import { AuthError } from "next-auth";

export const SignUpAction = async (
  data: RegisterSchema
): Promise<AuthResponse> => {
  try {
    // validate server
    const validateInput = registerSchema.safeParse(data);
    if (!validateInput.success) {
      return {
        success: false,
        message: validateInput.error.issues
          .map((issue) => issue.message)
          .join(", "),
      };
    }
    // check if user already exists
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (user) {
      return { success: false, message: "User already exists" };
    }
    // hash password
    const hashedPassword = await bycrypt.hash(data.password, 10);
    // create user
    await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    
    return { success: true, message: "Success Sign Up" };
  } catch (error: any) {
    console.error("SignUp Error:", error);
    return {
      success: false,
      message: error?.message || "Something went wrong",
    };
  }
};

export const signInAction = async (
  data: LoginSchema
): Promise<AuthResponse> => {
  try {
    // server validation
    const validateInput = loginSchema.safeParse(data);
    if (!validateInput.success) {
      return {
        success: false,
        message: validateInput.error.issues
          .map((issue) => issue.message)
          .join(", "),
      };
    }

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return { success: true, message: "Success Sign In" };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { success: false, message: "Invalid Email or Password" };
      }
    }
    return {
      success: false,
      message: "Internal Server Error , Please try again later",
    };
  }
};

export const signOutAction = async (): Promise<AuthResponse> => {
  try {
    await signOut({
      redirect: false,
    });
    return { success: true, message: "Success Sign Out" };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Internal Server Error , Please try again later",
    };
  }
};