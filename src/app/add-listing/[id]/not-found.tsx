"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartCrack } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md space-y-4">
        <HeartCrack className="h-20 w-20 mx-auto text-muted-foreground" />
        <h1 className="text-3xl font-bold">Listing Not Found</h1>
        <p className="text-muted-foreground">
          The listing you are trying to edit does not exist or has been removed.
        </p>

        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href="/profile">Back to Profile</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
