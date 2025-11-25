/* eslint-disable @typescript-eslint/no-explicit-any */

import TabsNavigation from "@/components/shared/TabsNavigation";
import UserBanner from "@/components/shared/UserBanner";
import { Suspense } from "react";

export default function ProfileLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: any;
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
