import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldOff } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "SecondGo - Unauthorized",
  description: "You don't have permission to access this page",
};

const Page = () => {
  return (
    <div className="min-h-svh w-full flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-xl shadow-md text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 dark:bg-red-900/30">
          <ShieldOff className="h-12 w-12 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-2xl font-extrabold">Access Denied</h2>
        <p className="text-muted-foreground">You are not authorized to access this page.</p>
        <div className="flex gap-3 justify-center">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        
        </div>
      </div>
    </div>
  );
};

export default Page;
