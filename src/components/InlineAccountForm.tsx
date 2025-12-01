/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { Dispatch, SetStateAction, useActionState } from "react";
import { CardContent } from "./ui/card";
import { Mail, Phone } from "lucide-react";
import { User } from "@prisma/client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { updateAccountAction } from "@/actions/user-action";
interface InlineAccountFormProps {
  user: User;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
const InlineAccountForm = ({
  user,
  isEditing,
  setIsEditing,
}: InlineAccountFormProps) => {
  const [state, formAction, isPending] = useActionState(
    async (_prev:any, formData:FormData) => {
      const res = await updateAccountAction(formData);
      if (res?.success) {
        setIsEditing(false);
      }
      return res;
    },
    { success: false, message: "" }
  );
  return (
    <div>
      <CardContent className="space-y-4">
        <form className="space-y-4" action={formAction}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                First Name
              </label>

              {isEditing ? (
                <Input
                  name="firstName"
                  defaultValue={user.firstName || user.name?.split(" ")[0]}
                  required
                />
              ) : (
                <p className="font-medium">{user.firstName || user.name?.split(" ")[1]}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Last Name
              </label>
              {isEditing ? (
                <Input
                  name="lastName"
                  defaultValue={user.lastName || ""}
                  required
                />
              ) : (
                <p className="font-semibold">{user?.lastName || "Doe"}</p>
              )}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Email
            </label>
            <p className="font-semibold flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {user?.email}
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Phone
            </label>
            {isEditing ? (
              <Input
                name="phone"
                defaultValue={user.phone || "+90 555 666 77 88"}
                required
              />
            ) : (
              <p className="font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {user?.phone || "+90 555 123 45 67"}
              </p>
            )}
          </div>
          {/* Buttons */}
          {isEditing && (
            <div className="flex gap-3 pt-2">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save"}
              </Button>

              <Button
                type="button"
                variant="secondary"
                
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          )}
         {state?.message && (
        <p className={state.success ? "text-green-600" : "text-red-600"}>
          {state.message}
        </p>
      )}
        </form>
      </CardContent>
    </div>
  );
};

export default InlineAccountForm;
