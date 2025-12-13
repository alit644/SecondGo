import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";
const { auth: middleware } = NextAuth(authConfig);
const authRoute = ["/login", "/register"];
const protectedRoute = ["/profile", "/add-listing", "/become-seller"];
export default middleware(async (req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;
  const session = req.auth; // may be null
  const isUserLoggedIn = !!session;
  if (authRoute.includes(path) && isUserLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }
  if (protectedRoute.some((route) => path.startsWith(route))) {
    if (!isUserLoggedIn) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile",
    "/add-listing",
    "/profile/:path*",
    "/become-seller",
  ],
};
