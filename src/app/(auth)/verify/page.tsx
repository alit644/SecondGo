import { verifyTokenAction } from "@/actions/verify-token-action";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { token: Promise<string> };
}) {
  const token = await searchParams.token;
  if (!token) {
    return redirect("/");
  }
  const result = await verifyTokenAction(token);

  if (result.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-xl shadow-md">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="mt-6 text-2xl font-extrabold text-gray-900 dark:text-white">
              Your account has been successfully activated! 🎉
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Your email has been verified and your seller account is now
              active.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              You can now sign in and start selling your products on our
              platform.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <Button className="w-full flex justify-center py-3 text-base bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/profile">Go to Profile Page</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  return (
    <div className="min-h-screen flex items-center justify-center bg-background  p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-xl shadow-md">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 dark:bg-red-900/30">
            <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-gray-900 dark:text-white">
            Activation Error
          </h2>
          <p className="mt-4 text-red-600 dark:text-red-400">
            {result.message ||
              "Sorry, an error occurred while trying to activate your account."}
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Please check the link or request a new activation link.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button className="w-full flex justify-center py-3 text-base bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/profile">Back to Profile Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
