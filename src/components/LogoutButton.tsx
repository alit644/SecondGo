"use client"
import { signOutAction } from "@/actions/auth-action";
import React from "react";
import { Button } from "./ui/button";

const LogoutButton = () => {
 const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
  const res =  await signOutAction();
  if (res.success) {
   window.location.href = "/";
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
