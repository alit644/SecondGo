"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Settings,
  Mail,
  Edit,
  ShieldCheck,
  OctagonAlert,
  X,
  Loader2,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState, useTransition } from "react";
import { uploadAvatarAction } from "@/actions/user-action";

const UserBanner = ({
  avatarUrl = "/user-profile.jpg",
}: {
  avatarUrl?: string;
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();
  const { data: session } = useSession();
  const fullName = session?.user?.firstName + " " + session?.user?.lastName;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    setFile(file);
  };
  const handleUpload = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    startTransition(() => {
      uploadAvatarAction(formData);
    });
    setPreview(null);
    setFile(null);
  };
  const handleCancel = useCallback(() => {
    setPreview(null);
    setFile(null);
  }, []);
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);
  return (
    <div className="relative w-full bg-white dark:bg-card rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          {/* image */}
          <div className="relative group">
            <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all duration-300">
              <Avatar className="h-full w-full">
                <AvatarImage
                  src={preview || session?.user?.image || avatarUrl}
                  alt={session?.user?.name || "Avatar Image"}
                  className="group-hover:opacity-80 transition-opacity duration-300 object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xl">
                  {getInitials(session?.user?.name || fullName)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <label className="cursor-pointer p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-200">
                  <input
                    name="avatar"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <Edit className="h-4 w-4 text-gray-800" />
                </label>
              </div>
              {isPending && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full">
                  <Loader2 className="animate-spin text-white w-6 h-6" />
                </div>
              )}
            </div>
            {/* remove preview image*/}
            {preview && (
              <Button
                onClick={handleCancel}
                type="button"
                aria-label="Remove preview"
                title="Remove preview"
                disabled={isPending}
                variant="destructive"
                size="icon"
                className="absolute -top-1 -right-1 size-6"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

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
          <Link href="/profile/settings">
            <Button
              variant="outline"
              size="icon"
              aria-label="settings"
              title="settings"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>
        </div>
      </div>
      {/* upload image button */}
      {preview && (
        <div className="flex gap-3">
          <Button
            variant={"ghost"}
            size={"sm"}
            disabled={isPending}
            aria-label="Upload Image"
            title="Upload Image"
            onClick={handleUpload}
          >
            {isPending ? "Uploading..." : "Upload Image"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserBanner;
