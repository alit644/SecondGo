"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Settings, Mail, Edit } from "lucide-react";

interface UserBannerProps {
  name?: string;
  email?: string;
  avatarUrl?: string;
  onEdit?: () => void;
  onSettings?: () => void;
}

const UserBanner = ({
  name = "John Doe",
  email = "john.doe@example.com",
  avatarUrl = "/215162792921.jpg",
  onEdit = () => {},
  onSettings = () => {},
}: UserBannerProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="relative w-full bg-white dark:bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-blue-500 text-white text-xl">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Mail className="h-4 w-4 mr-1" />
              <span>{email}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 absolute top-2 right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={onEdit}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <Edit className="h-4 w-4" />
            <span className="sr-only">Edit Profile</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onSettings}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
