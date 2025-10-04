"use client"
import { signOutAction } from "@/actions/auth-action";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
 const router = useRouter();
 const handleLogout = async () => {
  try {
  const res =  await signOutAction();
  if (res.success) {
   router.push("/");
  }
  } catch (error) {
   console.log(error);
  }
 }
  return (
    <div>
      <form onSubmit={handleLogout}>
        <Button variant={"outline"} type="submit">
          Logout
        </Button>
      </form>
    </div>
  );
};

export default LogoutButton;
