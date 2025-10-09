import { auth } from "@/auth";
import BecomeSellerSection from "@/components/BecomeSellerSection";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;

  // Mock data for demonstration

  return (
    <div className="min-h-screen  py-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Content Tabs */}
        <BecomeSellerSection />
      </div>
    </div>
  );
};

export default ProfilePage;
