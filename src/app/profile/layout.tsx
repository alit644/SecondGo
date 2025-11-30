
import TabsNavigation from "@/components/shared/TabsNavigation";
import UserBanner from "@/components/shared/UserBanner";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "SecondGo | My Profile",
  
};

export default function ProfileLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-full py-4">
      <Suspense>
        <UserBanner />
      </Suspense>
      {/* TabsList */}
      <TabsNavigation />

      {/* Page content */}
      <div>{children}</div>
      {modal}
    </div>
  );
}
