import { auth } from "@/auth";
import BecomeSellerSection from "@/components/BecomeSellerSection";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();
  if (session?.user.role === "SALLER") {
    redirect("/profile");
  }
  const user_email = session?.user.email;
  return (
    <div>
      <BecomeSellerSection email={user_email as string} />
    </div>
  );
};

export default Page;
