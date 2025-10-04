import React, { Suspense } from "react";
import LoginForm from "@/components/LoginForm";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Metadata } from "next";
export const metadata: Metadata = {
 title: "SecondGo - Login",
 description: "Login to your account",
};
const Page = () => {
  return (
    <div className="min-h-svh w-full flex items-center justify-center px-4 py-10">
      <BackgroundRippleEffect />
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default Page;
