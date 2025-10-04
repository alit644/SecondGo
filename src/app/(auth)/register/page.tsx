import RegisterForm from "@/components/RegisterForm";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SecondGo - Register",
  description: "Register to your account",
};
const Page = () => {
  return (
    <div className="min-h-svh w-full flex items-center justify-center px-4 py-10">
     <BackgroundRippleEffect/>
      <RegisterForm />
    </div>
  );
};

export default Page;
