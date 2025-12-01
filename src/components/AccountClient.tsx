"use client";
import React, { useState } from "react";
import {  CardHeader, CardTitle } from "./ui/card";
import { Edit, User as UserIcon } from "lucide-react";
import { User } from "@prisma/client";
import { Button } from "./ui/button";
import InlineAccountForm from "./InlineAccountForm";

interface AccountClientProps {
  user: User;
}

const AccountClient = ({ user }: AccountClientProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <div>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <UserIcon className="w-5 h-5 text-blue-600" />
          Personal Information
        </CardTitle>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        )}
      </CardHeader>
     <InlineAccountForm user={user} isEditing={isEditing} setIsEditing={setIsEditing}/>
    </div>
  );
};

export default AccountClient;
