import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";
const { auth: middleware } = NextAuth(authConfig);
const authRoute = ["/login", "/register"];
const protectedRoute = ["/profile"];
export default middleware((req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;
  const isUserLoggedIn: boolean = Boolean(req.auth);
  if (authRoute.includes(path) && isUserLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }
  if (protectedRoute.includes(path) && !isUserLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }
});

export const config = {
  matcher: ["/login", "/register", "/profile"],
};
