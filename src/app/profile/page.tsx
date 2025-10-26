import { auth } from "@/auth";
import BecomeSellerSection from "@/components/BecomeSellerSection";
import { redirect } from "next/navigation";
import MyListing from "@/components/MyListing";
const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="min-h-screen  py-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Content Tabs */}
        {user.role === "USER" ? (
          <BecomeSellerSection email={user.email || ""} />
        ) : (
          <MyListing />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
