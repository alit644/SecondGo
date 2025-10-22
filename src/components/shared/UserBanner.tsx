"use client"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Settings, Mail, Edit, ShieldCheck, OctagonAlert } from "lucide-react";
import { useSession } from "next-auth/react";

const UserBanner =  ({ avatarUrl = "/215162792921.jpg" } : { avatarUrl?: string }) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // const session = await auth();
  const {data: session} = useSession()
  const fullName = session?.user?.firstName + " " + session?.user?.lastName;

  return (
    <div className="relative w-full bg-white dark:bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={session?.user?.image || avatarUrl}
              alt={session?.user?.name || ""}
            />
            <AvatarFallback className="bg-blue-500 text-white text-xl">
              {getInitials(session?.user?.name || fullName)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {session?.user?.name || fullName}
              </h2>
              {session?.user?.role === "SALLER" && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <ShieldCheck className="h-4 w-4 mr-1" />
                  Verified
                </span>
              )}
              {session?.user?.role === "USER" && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                  <OctagonAlert className="h-4 w-4 mr-1" />
                  Not Verified
                </span>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Mail className="h-4 w-4 mr-1" />
              <span>{session?.user?.email}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 absolute top-2 right-4">
          <Button
            variant="outline"
            size="icon"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <Edit className="h-4 w-4" />
            <span className="sr-only">Edit Profile</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
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
